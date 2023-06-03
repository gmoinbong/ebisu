import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.css";

type Props = {
  children: React.ReactNode;
  width?: number | string;
};

export const SliderItem = ({ children, width }: Props) => {
  return (
    <div className="slider-item" style={{ width }}>
      {children}
    </div>
  );
};

const Slider = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [startX, setStartX] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 0) {
      updateIndex(activeIndex + 1);
    } else if (diff < 0) {
      updateIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, paused]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(0)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child: any, index) => {
          if (child) {
            return React.cloneElement(child, { width: "100%" });
          }
        })}
      </div>
      <div className="prev-button" onClick={() => updateIndex(activeIndex - 1)}>
        <FaChevronLeft />
      </div>
      <div className="next-button" onClick={() => updateIndex(activeIndex + 1)}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Slider;
