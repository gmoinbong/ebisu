import { isMobile } from "../../utils/isMobile";
import Button from "../layout/button";
import styles from "./CollectionBlock.module.css";

export interface collectionProps {
  title: string;
  subtitle: string;
  image1: string;
  image2: string
  button1Text: string;
  button2Text: string;
}
const CollectionBlock = ({ title, subtitle, image1, image2, button1Text, button2Text, }: collectionProps) => {
  if (isMobile) return (
    <div className={styles.collectionBlock}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.imageBlock}>
        <div className={`${styles.imageContainer} ${styles.upblock}`}>
          <img src={image1} alt="Image 1" className={styles.image} />
          <Button text={button1Text} className={`${styles.button} ${styles.left}`} />
        </div>
        <div className={styles.imageContainer}>
          <img src={image2} alt="Image 2" className={styles.image} />
          <Button text={button2Text} className={`${styles.button} ${styles.right}`} />
        </div>
      </div>
    </div>)
  else {
    return (
      <div className={styles.collectionBlock}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.imageContainer}>
            <img src={image1} alt="Image 1" className={styles.image} />
            <Button text={button1Text} className={`${styles.button} ${styles.left}`} />
          </div>
          <div className={styles.imageContainer}>
            <img src={image2} alt="Image 2" className={styles.image} />
            <Button text={button2Text} className={`${styles.button} ${styles.right}`} />
          </div>
        </div>
      </div>
    );
  }
};

export default CollectionBlock;
