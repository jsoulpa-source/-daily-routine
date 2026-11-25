/* 네트워크 그대로 사용(캐시 없음) — 앱을 고치면 바로 반영되도록 */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* 기본 네트워크 요청 */ });
