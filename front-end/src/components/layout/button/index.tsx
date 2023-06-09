import React from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className, onClick }: Props) => {
  return <button onClick={onClick} className={`${styles.button} ${className}`}> {text} </button>
};

export default Button;
