module.exports = {
    site: 'https://maconmetalworks.com',
    scans: 1, // Number of pages to scan
    debug: false, // Disable debug mode unless needed
    lighthouseOptions: {
      formFactor: 'desktop', // Adjust based on your preferred target device
      throttlingMethod: 'simulate', // Simulate a throttled environment for accurate results
    },
  };
  