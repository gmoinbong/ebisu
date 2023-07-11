import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from '../Product.module.css';
type Props = {
  child: React.ReactNode
  title: string
}

const Accordion = ({ child, title }: Props) => {

  const [accordionState, setAccordionState] = useState({
    expanded: false,
    initialRender: false,
  });

  const toggleAccordion = () => {
    setAccordionState((prevState) => ({
      ...prevState,
      initialRender: true,
      expanded: !prevState.expanded,
    }));
  };

  const { expanded, initialRender } = accordionState;

  return (
    <div className={`${styles.Accordion}  ${expanded ? styles.collapsed : styles.expanded} }`}>
      <div className={styles.toggleButton} onClick={toggleAccordion} aria-expanded={expanded}>
        {expanded ? (
          <AiOutlineMinus className={styles.toggleIcon} />
        ) : (
          <AiOutlinePlus className={styles.toggleIcon} />
        )}
        <h6>{title}</h6>
      </div>
      <div className={`${styles.AccordionContent} ${expanded ? styles.show : styles.hide}`}>
        {initialRender ? <>{child} </> : null}
      </div>
    </div >
  );
};

export default React.memo(Accordion);
