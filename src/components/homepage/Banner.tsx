import React, { FunctionComponent } from "react";

import styles from "./styles/Banner.module.scss";

export const Banner: FunctionComponent = () => {
  return (
    <>
      <div className={styles.baner_section}>
        <h1 className={styles.title}>Engula DataBase</h1>
        <div className={styles.meta}>
          <p style={{ fontSize: "20px" }}>
            Managed Caching Service For Global Business
          </p>
        </div>

        <div className={styles.start}>
          <a
            className={styles.wBtn}
            href="https://dev.montplex.com"
            target="_blank"
          >
            GET STATRED
          </a>
        </div>
      </div>
      <div className={styles.sunsetWrapper}>
        <div className={styles.hdClients}>
          <div className={styles.sunset}>
            <div className={styles.sunsetEclipse}></div>
            <div className={styles.divBlock70}></div>
          </div>
        </div>
      </div>
    </>
  );
};
