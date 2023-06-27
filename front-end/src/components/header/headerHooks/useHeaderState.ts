import { useState } from 'react';
import { useRouteChange } from '../../../hooks/useRouteChange';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../../redux/slices/profileSlice';
import useIsMobile from '../../../utils/useIsMobile';

const useHeaderState = () => {
  const dispatch = useDispatch()
  const handleCountrySelect = (country: string) => {
    dispatch(setCountry(country));
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useIsMobile()

  const routeChange = useRouteChange()
  const handleFocus = () => {
    setIsScrolled(true);
  };

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickRouteToMain = () => routeChange('/')

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return {
    isSearchVisible, setIsSearchVisible, isScrolled, setIsScrolled,
    menuOpen, setMenuOpen, showPopup, setShowPopup, handleFocus,
    handleMobileMenuToggle, handleClickRouteToMain, toggleSearch,
    handlePopupOpen, handlePopupClose, handleCountrySelect, isMobile
  };
};

export default useHeaderState;
