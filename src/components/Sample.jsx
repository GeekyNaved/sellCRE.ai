import React from "react";
import styles from "./sample.module.css";
import Image from "next/image";
import Button from "./Button";

const Sample = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerC}>
        <p className={styles.title}>Sample OMs created with our platform</p>
        <div className={styles.boxWrapper}>
          {/* <div className={styles.boxC}> */}
          <div className={styles.boxI}>
            <Image
              width={400}
              height={350}
              src="/images/sample1.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Retail OM</p>
            <p className={styles.subtitle}>
              strip centers, street retail, vehicle related, and more.
            </p>
            <button className={styles.btn}>View Sample Template</button>
          </div>
          <div className={styles.boxI}>
            <Image
              width={400}
              height={350}
              src="/images/sample2.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Multi-Family OM</p>
            <p className={styles.subtitle}>
              garden, low-rise, mid-rise, high-rise.
            </p>
            <button className={styles.btn}>View Sample Template</button>
          </div>
          <div className={styles.boxI}>
            <Image
              width={400}
              height={350}
              src="/images/sample3.png"
              // className={styles.logo}
              alt="box"
            />
            <p className={styles.boxT}>Office OM</p>
            <p className={styles.subtitle}>
              all classes of office buildings, loft/creative, medical.
            </p>
            <button className={styles.btn}>View Sample Template</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sample;
