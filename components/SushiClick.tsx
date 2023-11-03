'use client'

import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti'; 

const SushiClick = () => {
  const [coordinates, setCoordinates] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [locations, setLocations] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });
      setLocations((prevLocations) => [...prevLocations, { x, y, id: prevLocations.length + 1 }]);

      jsConfetti.addConfetti({
        emojis: ['🍣','🦄'],
        emojiSize: 100,
        confettiNumber: 30,
      });
    };

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      {locations.map((location) => (
        <div key={location.id} style={{ position: 'absolute', top: location.y, left: location.x }}>
          hi
        </div>
      ))}
      </div>
  );
};

export default SushiClick;