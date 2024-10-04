import React from "react";
import { socialmedia } from "../constants";

const Follow = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <p style={{ marginRight: '10px' }}>Follow Us On</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        {socialmedia.map((img, index) => (
          <a
            key={index}
            href={img.href}
            style={{
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {img.images}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Follow;
