import React, { FunctionComponent } from "react";

import styles from "./styles/Card.module.scss";

export const Cards: FunctionComponent = () => {
  return (
    <div className="container" style={{ zIndex: 20, padding: "60px 0" }}>
      <div className={styles.cardContent}>
        <div className={styles.cardItem}>
          <div className={styles.cardBox}>
            <div className={styles.icon_8}>
              <img
                src="https://assets.website-files.com/62865614b39c464b76d339aa/63f79543e735b55206be9c29_scan%201.png"
                loading="lazy"
                alt=""
                className={styles.logo24}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.blockTitle}>Redis Compatible</div>
              <div className={styles.blockBody}>
                Redis is a widely adopted in-memory data store for use as a
                database, cache, message broker, queue, session store, and
                leaderboard.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardBox}>
            <div className={styles.icon_8}>
              <img
                src="https://assets.website-files.com/62865614b39c464b76d339aa/63f79543e735b55206be9c29_scan%201.png"
                loading="lazy"
                alt=""
                className={styles.logo24}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.blockTitle}>
                Lower cost with zero effort
              </div>
              <div className={styles.blockBody}>Pay only for what you use.</div>
            </div>
          </div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardBox}>
            <div className={styles.icon_8}>
              <img
                src="https://assets.website-files.com/62865614b39c464b76d339aa/63f79543e735b55206be9c29_scan%201.png"
                loading="lazy"
                alt=""
                className={styles.logo24}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.blockTitle}>
                Any scale, any place, any cloud
              </div>
              <div className={styles.blockBody}>
                You can start small and easily scale your Redis data as your
                application grows all the way up to a cluster with TiB data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
