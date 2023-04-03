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
          {/* But don't worry about migrating all your code to Vue 3 by then – get
          NES Vue 2 and stay on supported, secured Vue 2 for as long as you
          need. */}
        </div>
        {/* <img
          src="https://assets.website-files.com/62865614b39c464b76d339aa/63f8ec71f39606b63cd43fff_Group%2039577%20(2).png"
          loading="lazy"
          width="200"
          alt=""
          className={styles.image40}
        /> */}
        <div className={styles.start}>
          <a className={styles.wBtn}>See a Product Demo</a>
        </div>
      </div>
      <div className={styles.sunsetWrapper}>
        <div className={styles.hdClients}>
          <div className={styles.sunset}>
            <div className={styles.sunsetEclipse}></div>
            <div className={styles.divBlock70}></div>
          </div>
          {/* <div className={styles.eclipsingBlockContainer}>
            <div className={styles.textBlock39}>
              "We have partnered with industry experts to provide{" "}
              <strong>Extended LTS for Vue 2</strong>. If you expect to be using
              Vue 2 beyond the EOL date of December 31st, 2023, make sure to
              plan ahead: Learn more about HeroDevs’ NES (Never-Ending Support)
              for Vue 2."
            </div>
            <div className={styles.textBlock40}>Evan You - Creator of Vue</div>
          </div> */}
        </div>
      </div>
    </>
  );
};
