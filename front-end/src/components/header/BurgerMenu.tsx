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
    </>
  );
}
