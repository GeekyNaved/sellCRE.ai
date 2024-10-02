import React from "react";
import styles from "./services.module.css";
import Image from "next/image";
const Service = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Create OMs and Ads For</p>
      <p className={styles.title}>Various Real Estate Property Types</p>
      <div className={styles.boxWrapper}>
        <div className={styles.boxC}>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/store.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Retail</p>
          </div>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/house.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Multi-family</p>
          </div>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/building.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Office</p>
          </div>
        </div>
        <div className={styles.boxC}>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/warehouse.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Industrial</p>
          </div>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/hotel.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Hotel</p>
          </div>
          <div className={styles.boxI}>
            <Image
              width={50}
              height={50}
              src="/images/land.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Land</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
