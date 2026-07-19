# BIM Fundamentals — Study App (PWA)

Klausurvorbereitung **BIM Fundamentals (TUM)**: 94 Lernkarten (Leitner-System) + Study Guide
(12 Kapitel), als Web-App fürs iPhone — offline nutzbar, mit eigenem Icon.

## Auf GitHub Pages veröffentlichen (einmalig, ~5 Min.)

1. Auf [github.com](https://github.com) einloggen (oder kostenlosen Account erstellen).
2. Oben rechts **+** → **New repository** → Name z. B. `bim-study` → **Public** → **Create repository**.
3. Auf der Repo-Seite: **uploading an existing file** anklicken → den **gesamten Inhalt dieses
   Ordners** (nicht den Ordner selbst) ins Fenster ziehen — also `index.html`, `sw.js`,
   `manifest.webmanifest`, `README.md`, `Lernkarten_BIM_Fundamentals.html` sowie die Ordner
   `icons/` und `StudyGuide/` → **Commit changes**.
4. **Settings → Pages** → unter *Build and deployment*: Source = **Deploy from a branch**,
   Branch = **main** / **/(root)** → **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter:
   `https://DEIN-BENUTZERNAME.github.io/bim-study/`

## Auf dem iPhone installieren (iOS 18)

1. Die URL in **Safari** öffnen (wichtig: Safari, nicht Chrome).
2. **Teilen-Button** (Quadrat mit Pfeil) → **„Zum Home-Bildschirm"** → **Hinzufügen**.
3. Die App „BIM Studium" liegt jetzt mit Icon auf dem Home-Bildschirm:
   Vollbild, offline nutzbar, Lernfortschritt bleibt gespeichert.

## Hinweise

- **Offline:** Nach dem ersten Öffnen sind alle Inhalte gecacht (Service Worker).
- **Lernfortschritt** (Leitner-Boxen) wird lokal auf dem Gerät gespeichert — er überträgt sich
  nicht zwischen Geräten.
- **Inhalte aktualisieren:** geänderte Dateien einfach erneut ins Repo hochladen und in `sw.js`
  die Zeile `const VERSION = "bim-study-v1"` auf `v2` erhöhen (sonst liefert der Cache alte Inhalte).
