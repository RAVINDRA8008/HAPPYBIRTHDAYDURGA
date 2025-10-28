import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const useSparkleTrail = (mousePosition) => {
  const [sparkles, setSparkles] = useState([]);
  const [lastSparkle, setLastSparkle] = useState({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    if (mousePosition.x === 0 && mousePosition.y === 0) return;

    // Throttle sparkle creation - only create if mouse moved enough or enough time passed
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - lastSparkle.x, 2) + 
      Math.pow(mousePosition.y - lastSparkle.y, 2)
    );
    const timePassed = Date.now() - lastSparkle.time;

    if (distance < 30 && timePassed < 100) return;

    const newSparkle = {
      id: Date.now() + Math.random(),
      x: mousePosition.x,
      y: mousePosition.y,
    };

    setLastSparkle({ x: mousePosition.x, y: mousePosition.y, time: Date.now() });
    setSparkles((prev) => [...prev.slice(-3), newSparkle]); // Keep max 4 sparkles

    const timer = setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 600);

    return () => clearTimeout(timer);
  }, [mousePosition.x, mousePosition.y]);

  return sparkles;
};
