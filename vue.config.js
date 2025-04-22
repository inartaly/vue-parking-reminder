module.exports = {
  pwa: {
    name: 'Parking Reminder',
    themeColor: '#4CAF50',
    workboxOptions: {
      offlineGoogleAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: { maxEntries: 10, maxAgeSeconds: 7 * 24 * 60 * 60 },
          },
        },
      ],
    },
  },
};
