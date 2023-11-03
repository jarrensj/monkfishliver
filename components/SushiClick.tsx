'use client'

import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti'; 

const SushiClick = () => {
  const [coordinates, setCoordinates] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });

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
      {coordinates.x !== null && coordinates.y !== null && (
        <div style={{ position: 'absolute', top: coordinates.y, left: coordinates.x }}>
          hi
        </div>
      )}
    </div>
  );
};

export default SushiClick;