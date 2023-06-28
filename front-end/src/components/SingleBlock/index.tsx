import React from "react";
import { collectionProps } from "../CollectionBlock";
import styles from './SingleBlock.module.css'
import Button from "../layout/Button";
import { useRouteChange } from "../../hooks/useRouteChange";

export type NewComponentProps = Omit<collectionProps, "image2" | "button2Text">

const SingleBlock: React.FC<NewComponentProps> = ({ button1Text, image1, subtitle, title }) => {
  const routeChange = useRouteChange()
  const handleClickShop = async () => {
    routeChange('/products')
  }
  return (
    <div className={styles.container}>
      <img className={styles.imageBlock} src={image1} alt="" />
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button onClick={handleClickShop} className={styles.btn} text={button1Text} />
      </div>
    </div>
  )
}

export default SingleBlock;
