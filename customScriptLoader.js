(function() {
  // Function to load a single script asynchronously
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = function() {
      console.log(url + " loaded successfully.");
      if (typeof callback === "function") callback();
    };
    script.onerror = function() {
      console.error("Error loading script:", url);
    };
    document.head.appendChild(script);
  }
  
  // Wix WebsiteSpeedy script URLs as provided
  var scriptUrls = [
    "https://wix-websitespeedy.b-cdn.net/speedyscripts/ecmrx_4407/ecmrx_4407_1.js",
    "https://wix-websitespeedy.b-cdn.net/speedyscripts/ecmrx_4407/ecmrx_4407_2.js",
    "https://wix-websitespeedy.b-cdn.net/speedyscripts/ecmrx_4407/ecmrx_4407_3.js"
  ];
  
  // Load each script asynchronously
  scriptUrls.forEach(function(url) {
    loadScript(url);
  });
})();
