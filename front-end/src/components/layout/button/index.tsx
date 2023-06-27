import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

type Props = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string | number
  maxWidth?: string | number
  margin?: string | number
  backgroundColor?: Property.Color
  color?: Property.Color
  disabled?: boolean

}

const Button = ({ text, className, onClick, width, maxWidth, margin, color, backgroundColor }: Props) => {
  return <button style={{ width, maxWidth, margin, color, backgroundColor }} onClick={onClick} className={`${styles.button} ${className}`}> {text} </button>
};

export default Button;
