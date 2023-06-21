import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './Product.module.css';

const ReturnPolicy = () => {
  const [isReturnPolicyExpanded, setIsReturnPolicyExpanded] = useState(false);

  const toggleReturnPolicy = () => {
    setIsReturnPolicyExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`${styles.returnPolicy} ${isReturnPolicyExpanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.toggleButton} onClick={toggleReturnPolicy} aria-expanded={isReturnPolicyExpanded}>
        {isReturnPolicyExpanded ? (
          <AiOutlineMinus className={styles.toggleIcon} />
        ) : (
          <AiOutlinePlus className={styles.toggleIcon} />
        )}
        Return Policy
      </div>
      <div className={`${styles.returnPolicyContent} ${isReturnPolicyExpanded ? styles.show : styles.hide}`}>
        <p>
          You can simply return any item within 14 calendar days from the date of delivery for a refund or exchange.
        </p>
        <p>Customer needs to bear the return shipping fee and any cost incurred.</p>
        <p>Online Orders cannot be returned to any of Evisu’s boutiques.</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
