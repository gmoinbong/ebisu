import React from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  className?: string
}

const Button = ({ text, className }: Props) => {
  return <button className={`${styles.button} ${className}`}> {text} </button>
};

export default Button;
