/* put this in a SCRIPT tag in htmlHead to prevent Google Maps from being loaded */
window.google = {
  maps: {
    event: {
      addListener: function () {},
      trigger: function () {}
    },
    LatLng: function () {},
    Map: function () {
      return {
        setCenter: function () {}
      }; 
    },
    Marker: function () {},
    MapTypeId: {}
  }
};
