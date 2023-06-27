import { BsGeoAlt } from 'react-icons/bs'
import styles from '../Header.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import useIsMobile from '../../../utils/useIsMobile'

type Props = {
  popupOpen: () => void
}

export const CountryPannel = ({ popupOpen }: Props) => {
  const isMobile = useIsMobile()
  const country = useSelector((state: RootState) => state.setCountry.country)
  return (
    <p className={styles.countryPannel} onClick={popupOpen}>
      <BsGeoAlt style={isMobile ? { marginRight: '16px' } : { margin: '0' }} />
      {isMobile ? null : country}
    </p>)
}
