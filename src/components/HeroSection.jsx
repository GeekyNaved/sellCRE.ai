import React from "react";
import styles from "./hero.module.css";
import Button from "./Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner1}>
        <div className={styles.title}>
          <p>
            <b>Sell CRE Faste</b> with
          </p>
          <p>OMs & Ads created</p>
          <p>
            in <b>minutes</b>
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>Create beautiful Commercial Real Estate Offering</p>
          <p>Memorandums, Flyers & Ads in minutes with our AI</p>
          <p>powered platform</p>
        </div>
        <div className={styles.actions}>
          <Button title="Try For Free" />
          <div className={styles.demoC}>
            <Image
              width={20}
              height={20}
              src="/images/play.png"
              className={styles.logo}
              alt="logo"
            />
            <p className={styles.demo}>Watch Demo</p>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width={500}
          height={400}
          src="/images/hero.png"
          className={styles.logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
