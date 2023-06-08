import { GiHamburgerMenu } from "react-icons/gi";
// import styles from './Header.module.css'
type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function BurgerMenu({ isOpen, toggleMenu }: Props) {
  return (
    <>
      {isOpen ? (
        <GiHamburgerMenu style={{ display: 'none' }} onClick={toggleMenu} size={24} />
      ) : (
        <GiHamburgerMenu onClick={toggleMenu} size={24} />
      )}
      {isOpen && (
        <ul >
          <li>WHAT'S NEW</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>ANYTHING ELSE</li>
          <li>EVISU STORIES</li>
          <li>SALE</li>
          <li>ACCOUNT</li>
          <li>REGION & LANGUAGE</li>
        </ul>
      )}
    </>
  );
}
