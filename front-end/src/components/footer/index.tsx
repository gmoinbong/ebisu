import { RefObject, useRef } from 'react';
import styles from './Footer.module.css'
import { AiOutlineWeibo, AiOutlineYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import Button from '../layout/button';
import FooterBlocks from './FooterBlocks';


const Footer = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const handleSubscribeClick = () => {
    if (emailRef && emailRef.current) {
      (emailRef.current.value) = '';
    }
  };


  return (
    <>
      <FooterBlocks />
      <footer className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>CUSTOMER CARE</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>Contact Us</li>
              <li className={styles.footerLinkItem}>Track Your Order</li>
              <li className={styles.footerLinkItem}>Returns</li>
              <li className={styles.footerLinkItem}>Shipping</li>
              <li className={styles.footerLinkItem}>Size Guide</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>COMPANY</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>About Us</li>
              <li className={styles.footerLinkItem}>Stores</li>
              <li className={styles.footerLinkItem}>Careers</li>
              <li className={styles.footerLinkItem}>Privacy Policy</li>
              <li className={styles.footerLinkItem}>Terms & Conditions</li>
            </ul>
          </div>
          <div className={`${styles.footerColumn} ${styles.follow}`}>
            <h4 className={styles.followUs}>FOLLOW US</h4>
            <ul className={styles.footerSocialLinks}>
              <li className={styles.footerSocialLinkItem}>
                <a href="https://www.instagram.com/evisu1991/" className={styles.footerSocialLink}>
                  <BsInstagram />
                </a>
              </li>
              <li className={styles.footerSocialLinkItem}>
                <a href="https://www.weibo.com/hyevisu" className={styles.footerSocialLink}>
                  <AiOutlineWeibo />
                </a>
              </li>
              <li className={styles.footerSocialLinkItem}>
                <a href="https://www.facebook.com/evisu" className={styles.footerSocialLink}>
                  <FiFacebook />
                </a>
              </li>
              <li className={styles.footerSocialLinkItem}>
                <a href="https://www.youtube.com/channel/UCQuvOqW0zekht5yDAPKduGA" className={styles.footerSocialLink}>
                  <AiOutlineYoutube />
                </a>
              </li>
            </ul>
            <div className={styles.wrapper}>
              <input ref={emailRef} type='email' className={styles.input} placeholder='Input e-mail address here' />
              <Button onClick={handleSubscribeClick} className={styles.subscribe} text='Subscribe' />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} EVISU. All rights reserved.
          </p>
        </div>
      </footer >
    </>
  )
}

export default Footer