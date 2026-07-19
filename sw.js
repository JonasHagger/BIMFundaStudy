/* Service Worker — cacht alle Inhalte fuer Offline-Nutzung.
   Bei Inhalts-Updates: VERSION hochzaehlen, dann laden Clients neu. */
const VERSION = "bim-study-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./Lernkarten_BIM_Fundamentals.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./StudyGuide/index.html",
  "./StudyGuide/styles.css",
  "./StudyGuide/Ch00_ExamGuide.html",
  "./StudyGuide/Ch01_Fundamentals.html",
  "./StudyGuide/Ch02_GeometricModeling.html",
  "./StudyGuide/Ch03_IFC.html",
  "./StudyGuide/Ch04_ModelChecking.html",
  "./StudyGuide/Ch05_ParametricModeling.html",
  "./StudyGuide/Ch06_Collaboration.html",
  "./StudyGuide/Ch07_QuantityTakeOff.html",
  "./StudyGuide/Ch08_Documentation.html",
  "./StudyGuide/Ch09_GIS.html",
  "./StudyGuide/Ch10_ProjectExecution.html",
  "./StudyGuide/Ch11_Sustainability.html"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Cache-first, im Hintergrund aktualisieren (stale-while-revalidate) */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request)
        .then((resp) => {
          if (resp && resp.ok) {
            const copy = resp.clone();
            caches.open(VERSION).then((c) => c.put(e.request, copy));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});
