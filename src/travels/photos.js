const TRIP_GAP_MS = 2 * 24 * 60 * 60 * 1000;
const TRIP_JUMP_KM = 150;

export const monthIndex = (date) => date.getFullYear() * 12 + date.getMonth();
export const monthIndexToDate = (index) =>
  new Date(Math.floor(index / 12), index % 12, 1);

// travels/photos.json is written by pim-map-maker's src/data/publish.py; each photo is
// [place index, lat, lng, taken, placed, preview key], where placed is 1 when the position comes
// from GPS photos in the same folder and 2 from the folder name
export const parsePhotoData = ({ places = [], photos = [], previews = "" }) => {
  const previewBase = /^https:\/\//.test(previews) ? previews : "";
  return photos
    .map(([place, lat, lng, taken, placed = 0, key = ""], id) => {
      // No time zone in EXIF, so this parses as local time, which is what the camera showed
      const date = new Date(taken);
      return {
        id,
        lat,
        lng,
        date,
        month: monthIndex(date),
        place: places[place] || "Untitled",
        placed,
        preview: previewBase && /^[0-9a-f]+$/.test(key) ? key : "",
        previewBase,
      };
    })
    .filter(
      (photo) =>
        Number.isFinite(photo.lat) &&
        Number.isFinite(photo.lng) &&
        !Number.isNaN(photo.date.getTime()),
    )
    .sort((a, b) => a.date - b.date);
};

export const loadPhotos = async () => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}travels/photos.json`,
  );
  if (!response.ok)
    throw new Error(`photos.json could not be loaded (${response.status})`);
  return parsePhotoData(await response.json());
};

export const previewUrl = (photo, size) =>
  photo.preview ? `${photo.previewBase}/${size}/${photo.preview}.webp` : "";

// Expects photos sorted by date
const firstIndexFrom = (photos, month) => {
  let low = 0;
  let high = photos.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (photos[mid].month < month) low = mid + 1;
    else high = mid;
  }
  return low;
};

export const sliceByMonth = (photos, [start, end]) =>
  photos.slice(firstIndexFrom(photos, start), firstIndexFrom(photos, end + 1));

const distanceKm = (a, b) => {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLng = (b.lng - a.lng) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

const mostCommon = (values) => {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts].sort((a, b) => b[1] - a[1])[0][0];
};

// Expects photos sorted by date. A few days without photos, or a long jump, starts a new trip.
export const groupIntoTrips = (list) => {
  const groups = [];
  list.forEach((photo, i) => {
    const previous = list[i - 1];
    if (
      !previous ||
      photo.date - previous.date > TRIP_GAP_MS ||
      distanceKm(previous, photo) > TRIP_JUMP_KM
    ) {
      groups.push({ offset: i, photos: [] });
    }
    groups[groups.length - 1].photos.push(photo);
  });
  return groups.map(({ offset, photos }) => ({
    id: photos[0].id,
    offset,
    title: mostCommon(photos.map((photo) => photo.place)),
    start: photos[0].date,
    end: photos[photos.length - 1].date,
    photos,
  }));
};

const dayFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const monthFormat = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
});
const timeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});

const numberFormat = new Intl.NumberFormat("en-GB");

export const formatDay = (date) => dayFormat.format(date);
export const formatTime = (date) => timeFormat.format(date);
export const formatMonth = (date) => monthFormat.format(date);
export const formatDayRange = (start, end) => dayFormat.formatRange(start, end);
export const formatMonthRange = (start, end) =>
  monthFormat.formatRange(start, end);
export const formatCount = (count, word) =>
  `${numberFormat.format(count)} ${word}${count === 1 ? "" : "s"}`;

export const formatCoords = ({ lat, lng }) =>
  `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? "N" : "S"}, ${Math.abs(lng).toFixed(4)}° ${
    lng >= 0 ? "E" : "W"
  }`;

export const mapsUrl = ({ lat, lng }) =>
  `https://www.google.com/maps/search/?api=1&query=${lat.toFixed(5)},${lng.toFixed(5)}`;
