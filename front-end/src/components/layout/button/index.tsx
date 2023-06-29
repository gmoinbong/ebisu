import { MouseEventHandler } from "react";
import { CSSProperties } from "react";
import styles from "./Button.module.css";

type Props = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string | number;
  maxWidth?: string | number;
  margin?: string | number;
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  disabled?: boolean;
  type?: string;
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
};

const Button = ({ text, className, onClick, width, maxWidth, margin, color, backgroundColor, position, top, left }: Props) => {
  return <button
    style={{
      width, maxWidth, margin, color,
      backgroundColor, position, top, left
    }}
    onClick={onClick} className={`${styles.button} ${className}`}> {text} </button>
};

export default Button;
