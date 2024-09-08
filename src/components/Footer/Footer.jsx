import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <p>
              <span className={styles.highlight}>CU</span>{" "}
              <span className={styles.highlight}>E</span>
              <span>VENTS</span>
            </p>
          </div>
          <div className={styles.links}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/explore">Explore</Link>
          </div>
        </div>

        <hr className={styles.horizontalLine} />

        <div className={styles.socialLinks}>
          <a
            className={`${styles.btn} ${styles.facebook}`}
            href="#!"
            role="button"
          >
            <FaFacebookF />
          </a>
          <a
            className={`${styles.btn} ${styles.twitter}`}
            href="#!"
            role="button"
          >
            <FaTwitter />
          </a>
          <a
            className={`${styles.btn} ${styles.google}`}
            href="#!"
            role="button"
          >
            <FaGoogle />
          </a>
          <a
            className={`${styles.btn} ${styles.instagram}`}
            href="#!"
            role="button"
          >
            <FaInstagram />
          </a>
          <a
            className={`${styles.btn} ${styles.linkedin}`}
            href="#!"
            role="button"
          >
            <FaLinkedinIn />
          </a>
          <a
            className={`${styles.btn} ${styles.github}`}
            href="#!"
            role="button"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          © CU_EVENTS 2024 | All rights reserved |{" "}
          <a href="https://www.instagram.com/iam_akshat_dua/">Akshat Dua</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
