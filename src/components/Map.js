// src/components/Map.js
import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093636!2d144.95373531550473!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e67e6bc10d0!2sGoogle!5e0!3m2!1sen!2sus!4v1631129612841!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
