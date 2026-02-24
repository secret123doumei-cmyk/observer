// Service Worker 登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('ServiceWorker OK'))
      .catch(err => console.log('ServiceWorker NG', err));
  });
}
