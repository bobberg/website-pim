
import type { Lang } from "../i18n";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";

export type Slide = { src: string; alt: Record<Lang, string> };

export const images: Slide[] = [
  {
    src: image1,
    alt: {
      en: "A protester with slogans painted on his bare chest at a street demonstration",
      nl: "Een demonstrant met leuzen op zijn blote borst bij een straatdemonstratie",
    },
  },
  {
    src: image2,
    alt: {
      en: "A torn chain-link fence framing a view of new apartment blocks",
      nl: "Een kapot gaashek met een doorkijk op nieuwe flatgebouwen",
    },
  },
  {
    src: image3,
    alt: {
      en: "St Paul's Cathedral seen from the Millennium Bridge in London",
      nl: "St Paul's Cathedral gezien vanaf de Millennium Bridge in Londen",
    },
  },
  {
    src: image4,
    alt: {
      en: "A flock of birds circling above an elevated walkway on the edge of a city",
      nl: "Een zwerm vogels boven een verhoogde looproute aan de rand van een stad",
    },
  },
  {
    src: image5,
    alt: {
      en: "A crowd of men, some carrying rifles, walking down a street",
      nl: "Een groep mannen, sommigen met geweren, die door een straat loopt",
    },
  },
  {
    src: image6,
    alt: {
      en: "A newly built row of traditional-style townhouses on open land",
      nl: "Een nieuwe rij herenhuizen in traditionele stijl op open terrein",
    },
  },
  {
    src: image7,
    alt: {
      en: "A man relaxing in a hammock behind the open window of a brick apartment",
      nl: "Een man in een hangmat achter het open raam van een bakstenen appartement",
    },
  },
  {
    src: image8,
    alt: {
      en: "Crowds on the lawn during a concert at the Jay Pritzker Pavilion in Chicago",
      nl: "Mensenmassa op het gazon tijdens een concert bij het Jay Pritzker Pavilion in Chicago",
    },
  },
  {
    src: image9,
    alt: {
      en: "Shoppers browsing packed racks in a fashion store",
      nl: "Winkelend publiek bij volle kledingrekken in een modewinkel",
    },
  },
  {
    src: image10,
    alt: {
      en: "A market vendor holding up grapes at a stall piled high with fruit",
      nl: "Een marktkoopman houdt druiven omhoog bij een kraam vol fruit",
    },
  },
  {
    src: image11,
    alt: {
      en: "Skyscrapers under construction, with cranes on the skyline",
      nl: "Wolkenkrabbers in aanbouw, met kranen aan de skyline",
    },
  },
  {
    src: image12,
    alt: {
      en: "A clothing aisle in an Action discount store",
      nl: "Een gangpad met kleding in een Action-winkel",
    },
  },
  {
    src: image13,
    alt: {
      en: "Sign in Chinese and English: people come together in cities in order to live; they stay there to live well",
      nl: "Bord in het Chinees en Engels: mensen komen samen in steden om te leven; ze blijven er om goed te leven",
    },
  },
  {
    src: image14,
    alt: {
      en: "Sign with a Gandhi quote in Hindi and English: for my material needs my village is my world, for my spiritual needs the whole world is my village",
      nl: "Bord met een citaat van Gandhi in het Hindi en Engels: voor mijn materiële behoeften is mijn dorp mijn wereld, voor mijn spirituele behoeften is de hele wereld mijn dorp",
    },
  },
];
