import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.css";

type Props = {
  children: React.ReactNode;
  width?: number | string;
  maxWidth?: number | string;
};

export const ProductSliderItem = ({ maxWidth, children, width }: Props) => {
  return (
    <div className="slider-item" style={{ width, maxWidth }}>
      {children}
    </div>
  );
};

const ProductSlider = ({ children, width, maxWidth }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
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



  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(0)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)`, width, maxWidth }}
      >
        {React.Children.map(children, (child: any) => {
          if (child) {
            return React.cloneElement(child, { width: "100%" });
          }
        })}
      </div>
      <div className="index">{`${activeIndex + 1} / ${React.Children.count(children)}`}</div>
      <div className="prev-button" onClick={() => updateIndex(activeIndex - 1)}>
        <FaChevronLeft style={{ color: '#323131' }} />
      </div>
      <div className="next-button" onClick={() => updateIndex(activeIndex + 1)}>
        <FaChevronRight style={{ color: '#323131' }} />
      </div>
    </div>
  );
};

export default ProductSlider;
