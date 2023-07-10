import { useRouteChange } from '../../../hooks/useRouteChange'
import styles from '../Header.module.css'

type Props = {
  handleProfileClick: () => void
}

const Dropdown = ({ handleProfileClick }: Props) => {
  const routeChange = useRouteChange()

  const handleClick = (path: string) => {
    routeChange(`/${path}`)
    handleProfileClick()
  }

  return (
    <div className={styles.dropdownMenu}>
      <button style={{ borderBottom: '1px solid #eeecec' }} onClick={() => handleClick("account")}>Account</button>
      <button style={{ borderBottom: '1px solid #eeecec' }} onClick={() => handleClick("register")}>Sign Up</button>
      <button onClick={() => handleClick("login")}>Sign In</button>
    </div>
  )
}

export default Dropdown