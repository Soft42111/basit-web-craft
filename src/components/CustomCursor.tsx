import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorPosition = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    const animationFrame = setInterval(updateCursorPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(animationFrame);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor"
        style={{
          transform: `translate(${cursorPosition.x - 10}px, ${cursorPosition.y - 10}px)`
        }}
      />
      {/* Cursor dot */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;