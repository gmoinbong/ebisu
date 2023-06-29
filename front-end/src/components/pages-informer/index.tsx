import React from "react";
import { Link, useLocation } from "react-router-dom";
import { breadCrumbUtils } from "../../utils/breadCrumbUtils";

import styles from './PagesInformer.module.css';

const PagesInformer = () => {
  const location = useLocation();
  const breadCrumbs = breadCrumbUtils(location as any);

  return (
    <div className={styles.wrapper}>
      <Link className={styles.home} to="/">Home</Link>
      {breadCrumbs.map(({ path, label }, index) => (
        <React.Fragment key={path}>
          <span>&gt;</span>
          {index === breadCrumbs.length - 1 ? (
            <span>{label}</span>
          ) : (
            <Link to={path}>{label}</Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PagesInformer;
