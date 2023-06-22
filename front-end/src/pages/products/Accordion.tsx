import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './Product.module.css';
type Props = {
  child: React.ReactNode
  title: string
}
const Accordion = ({ child, title }: Props) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(false);

  const toggleAccordion = () => {
    setIsInitialRender(true);
    setIsAccordionExpanded((prevExpanded) => !prevExpanded);
  };


  return (
    <div className={`${styles.Accordion}  ${isAccordionExpanded ? styles.collapsed : styles.expanded} }`}>
      <div className={styles.toggleButton} onClick={toggleAccordion} aria-expanded={isAccordionExpanded}>
        {isAccordionExpanded ? (
          <AiOutlineMinus className={styles.toggleIcon} />
        ) : (
          <AiOutlinePlus className={styles.toggleIcon} />
        )}
        {title}
      </div>
      <div className={`${styles.AccordionContent} ${isAccordionExpanded ? styles.show : styles.hide}`}>
        {isInitialRender ? <>{child} </> : null}
      </div>
    </div >
  );
};

export default Accordion;
