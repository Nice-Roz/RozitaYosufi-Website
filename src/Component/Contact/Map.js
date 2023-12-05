import React from "react";
const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.6299344864824!2d62.219528824738305!3d34.33444270277753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7a7ea4d51a9%3A0x41a1131246037b0e!2sPosta%20e%20Number%20Yak!5e0!3m2!1sfa!2s!4v1701769991364!5m2!1sfa!2s"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </div>
  );
};

export default Map;
