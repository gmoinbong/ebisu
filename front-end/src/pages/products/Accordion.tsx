import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './Product.module.css';
type Props = {
  child: React.ReactNode
  title: string
}
const Accordion = ({ child, title }: Props) => {
  const [isReturnPolicyExpanded, setIsReturnPolicyExpanded] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(false);



  const toggleReturnPolicy = () => {
    setIsInitialRender(true);
    setIsReturnPolicyExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`${styles.returnPolicy} ${isReturnPolicyExpanded ? styles.collapsed : styles.expanded}`}>
      <div className={styles.toggleButton} onClick={toggleReturnPolicy} aria-expanded={isReturnPolicyExpanded}>
        {isReturnPolicyExpanded ? (
          <AiOutlineMinus className={styles.toggleIcon} />
        ) : (
          <AiOutlinePlus className={styles.toggleIcon} />
        )}
        {title}
      </div>
      <div className={`${styles.returnPolicyContent} ${isReturnPolicyExpanded ? styles.show : styles.hide}`}>
        {isInitialRender ? <>{child} </> : null}
      </div>
    </div >
  );
};

export default Accordion;
