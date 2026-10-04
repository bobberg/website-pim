// Prints the manifesto PDFs (English and Dutch) from src/content/manifesto.json with headless Chrome.
// Usage: npm run pdf   (set CHROME_PATH if Chrome is not found)
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const manifesto = JSON.parse(readFileSync(join(root, "src/content/manifesto.json"), "utf8"));

const labels = {
  en: { doc: "Manifesto", footer: "Pim van den Berg Perspectives · perspectives.nl" },
  nl: { doc: "Manifest", footer: "Pim van den Berg Perspectives · perspectives.nl" },
};

const chromePaths = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];
const chrome = chromePaths.find((path) => path && existsSync(path));
if (!chrome) throw new Error("Chrome not found: set CHROME_PATH");

const escape = (value) =>
  value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

const principleText = ({ text, emphasis }) =>
  emphasis && text.includes(emphasis)
    ? text.split(emphasis).map(escape).join(`<em>${escape(emphasis)}</em>`)
    : escape(text);

const page = (lang, content) => `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${escape(content.title)} – Pim van den Berg</title>
<style>
  @page {
    size: A4;
    margin: 20mm 20mm 22mm;
    @bottom-left { content: "${labels[lang].footer}"; font: 8pt "Segoe UI", system-ui, sans-serif; color: #5c5c57; }
    @bottom-right { content: counter(page) " / " counter(pages); font: 8pt "Segoe UI", system-ui, sans-serif; color: #5c5c57; }
  }
  * { box-sizing: border-box; }
  body { margin: 0; font: 10.5pt/1.55 Georgia, "Times New Roman", serif; color: #33332f; }
  a { color: inherit; }
  .brand { display: flex; align-items: baseline; gap: 8pt; }
  .brand-name { font: italic 700 14pt Georgia, serif; color: #1b1b1a; }
  .brand-tag { font: 700 7pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.18em; text-transform: uppercase; color: #a65200; }
  header { padding-bottom: 20pt; margin-bottom: 6pt; border-bottom: 2px solid #ff9c00; }
  h1 { margin: 34pt 0 8pt; font: 400 34pt/1.1 Georgia, serif; letter-spacing: -0.01em; color: #1b1b1a; }
  .sub { margin: 0; font: italic 13pt/1.4 Georgia, serif; color: #5c5c57; }
  blockquote { margin: 22pt 0 0 1.1em; font: italic 15pt/1.4 Georgia, serif; color: #1b1b1a; max-width: 30em; }
  blockquote::before { content: "\\201C"; float: left; margin-left: -0.6em; color: #ff9c00; font-style: normal; }
  ol { margin: 0; padding: 0; list-style: none; }
  li { display: grid; grid-template-columns: 26pt 1fr; column-gap: 10pt; padding: 11pt 0; border-top: 1px solid #e4dfd6; break-inside: avoid; }
  li:first-child { border-top: 0; }
  .num { padding-top: 1.5pt; font: 700 9.5pt "Segoe UI", system-ui, sans-serif; font-variant-numeric: tabular-nums; color: #a65200; }
  h2 { margin: 0 0 3pt; font: 700 11pt/1.3 "Segoe UI", system-ui, sans-serif; color: #1b1b1a; }
  p { margin: 0; }
  footer { margin-top: 14pt; padding-top: 12pt; border-top: 1px solid #e4dfd6; font: 9pt/1.6 "Segoe UI", system-ui, sans-serif; color: #5c5c57; break-inside: avoid; }
  footer p + p { margin-top: 4pt; }
</style>
</head>
<body>
<header>
  <div class="brand"><span class="brand-name">Pim van den Berg</span><span class="brand-tag">Perspectives</span></div>
  <h1>${escape(content.title)}</h1>
  <p class="sub">${escape(content.sub)}</p>
  <blockquote>${escape(content.quote)}</blockquote>
</header>
<ol>
${content.principles
  .map(
    (item, i) =>
      `  <li><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h2>${escape(item.title)}</h2><p>${principleText(item)}</p></div></li>`,
  )
  .join("\n")}
</ol>
<footer>
  <p>${escape(content.credit.replace(/\.$/, ""))} · <a href="https://www.smelten.nl">smelten.nl</a></p>
  <p>Pim van den Berg Perspectives BV · Charlotte van Montpensierlaan 2c, 1181 RR Amstelveen · <a href="mailto:pimvandenberg@wxs.nl">pimvandenberg@wxs.nl</a> · <a href="https://perspectives.nl/">perspectives.nl</a></p>
</footer>
</body>
</html>`;

const work = mkdtempSync(join(tmpdir(), "manifesto-pdf-"));
try {
  for (const [lang, content] of Object.entries(manifesto)) {
    const html = join(work, `${lang}.html`);
    const output = join(root, "public", content.pdf.replace(/^\//, ""));
    writeFileSync(html, page(lang, content));
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        `--user-data-dir=${join(work, "profile")}`,
        "--no-pdf-header-footer",
        "--generate-pdf-document-outline",
        `--print-to-pdf=${output}`,
        pathToFileURL(html).href,
      ],
      { stdio: "pipe" },
    );
    console.log(`${labels[lang].doc} (${lang}): ${content.pdf} – ${Math.round(statSync(output).size / 1024)} KB`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
