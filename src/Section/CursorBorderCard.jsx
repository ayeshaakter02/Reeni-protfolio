import { useState } from "react";

const CursorBorderCard = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="p-0.5 rounded-[20px]"
      style={{
        background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, tomato 0%, tomato 100%, transparent 41%)`
      }}
    >
      {children}
    </div>
  );
};

export default CursorBorderCard;