import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GiHamburgerMenu size={24} onClick={toggleMenu} />
      {isOpen && (
        <ul>
          <li>WHAT'S NEW</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>ANYTHING ELSE</li>
          <li>EVISU STORIES</li>
          <li>SALE</li>
          <li>REGION & LANGUAGE</li>
          <li>ACCOUNT</li>
        </ul>
      )}
    </div>
  );
}
