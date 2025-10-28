const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Archivos base del "app shell" (lo que necesita tu PWA para funcionar offline)
const APP_SHELL = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/logo.jpg',
    '/main.bundle.js',
];

// Precaching del App Shell
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            console.log('[ServiceWorker] Precaching app shell');
            return cache.addAll(APP_SHELL);
        })
    );
    self.skipWaiting(); // fuerza activación inmediata
});

// Limpieza de cachés antiguas y toma de control inmediata
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
                        console.log('[ServiceWorker] Borrando caché antigua:', key);
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim(); 
});

// Estrategias de caché según tipo de recurso
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Estrategia Stale-While-Revalidate (CSS, JS, imágenes)
    if (
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'image'
    ) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    // Estrategia Network-First + fallback local (HTML / JSON)
    if (
        request.mode === 'navigate' ||
        request.headers.get('accept')?.includes('text/html') ||
        request.headers.get('accept')?.includes('application/json')
    ) {
        event.respondWith(networkFirst(request));
        return;
    }

    // Por defecto: busca en caché o red
    event.respondWith(cacheFirst(request));
});

// Estrategia: Stale-While-Revalidate
async function staleWhileRevalidate(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);

    const networkFetch = fetch(request).then((networkResponse) => {
        cache.put(request, networkResponse.clone());
        return networkResponse;
    });

    return cachedResponse || networkFetch;
}

// Estrategia: Network-First + fallback
async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    try {
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        console.warn('[SW] Offline, sirviendo contenido desde caché');
        const cachedResponse = await cache.match(request);
        return cachedResponse || await caches.match('/index.html');
    }
}

// Estrategia: Cache-First simple (por si algo no entra en las otras)
async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached || fetch(request);
}
