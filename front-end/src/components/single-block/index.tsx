import React from "react";
import { collectionProps } from "../collection-block";
import styles from './SingleBlock.module.css'
import Button from "../layout/button";

export interface NewComponentProps extends Omit<collectionProps, "image2" | "button2Text"> { }

const SingleBlock: React.FC<NewComponentProps> = ({ button1Text, image1, subtitle, title }) => {
  return (
    <div className={styles.container}>
      <img className={styles.imageBlock} src={image1} alt="" />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button className={styles.btn} text={button1Text} />
      </div>
    </div>
  )
}

export default SingleBlock;
