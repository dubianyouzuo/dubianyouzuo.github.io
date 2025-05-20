const options = {
  // Required: Your API key
  key: 'YOUR_API_KEY',

  // Optional: Initial state of the map
  // 名古屋駅を中心に表示
  lat: 35.170736,
  lon: 136.882104,
  zoom: 6,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    const { map } = windyAPI;
    // .map is instance of Leaflet map
});
