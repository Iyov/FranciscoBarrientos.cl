// Service Worker para FranciscoBarrientos.cl
// Versión: 1.0.1

const CACHE_NAME = 'franciscobarrientos-v1.0.1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/tailwind.css',
  '/css/index.css',
  '/css/font-awesome_6.5.1_all.min.css',
  '/js/index.min.js',
  '/img/Francisco_Barrientos_Logo_[2]_500.png',
  '/img/favicon.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Service Worker: Instalado correctamente');
        return self.skipWaiting(); // Activar inmediatamente
      })
      .catch((error) => {
        console.error('❌ Service Worker: Error en instalación:', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker: Activando...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Eliminar caches antiguos
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activado correctamente');
      return self.clients.claim(); // Tomar control inmediatamente
    })
  );
});

// Interceptar peticiones (estrategia: Cache First, luego Network)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolverlo
        if (response) {
          console.log('📦 Service Worker: Sirviendo desde cache:', event.request.url);
          return response;
        }
        
        // Si no está en cache, hacer fetch
        console.log('🌐 Service Worker: Descargando desde red:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Verificar si es una respuesta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta para guardarla en cache
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch((error) => {
            console.error('❌ Service Worker: Error en fetch:', error);
            // Aquí podrías devolver una página offline personalizada
            return new Response('Offline - No se pudo cargar el recurso', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Mensaje desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
