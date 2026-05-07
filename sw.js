self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : { title: 'SOL SNIPER', body: 'Price alert!' };
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/sol-sniper/icon.png'
  });
});
self.addEventListener('fetch', e => {});