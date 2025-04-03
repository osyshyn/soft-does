"use client";
import styles from "./Footer.module.scss";

export default function Footer() {
  const scrollToContacts = () => {
    const element = document.getElementById("contacts");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} id="insights">
      <div className={styles.footer_line}>
        <div className={styles.footer_line_column}>
          <h4>Services</h4>
          <a href="#">Custom software development</a>
          <a href="#">Dedicated development teams</a>
          <a href="#">IT consulting</a>
          <a href="#">Digital transformation</a>
          <a href="#">Staff augmentation services</a>
        </div>
        <div className={styles.footer_line_column}>
          <h4>Success stories</h4>
          <a href="#">Clients</a>
          <a href="#">Case studies</a>
        </div>
        <div className={styles.footer_line_column}>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Mission and values</a>
          <a href="#">International presence</a>
          <a href="#">Management team</a>
          <a href="#">Corporate social responsibility</a>
          <a href="#">Industry contribution</a>
          <a href="#">Our clients and awards</a>
        </div>
      </div>
      <div className={styles.footer_line}>
        <div className={styles.footer_line_column}>
          <h4>Expertises</h4>
          <a href="#">Technology</a>
          <a href="#">Solutions</a>
        </div>
        <div className={styles.footer_line_column}>
          <h4>Yalantis solution hub</h4>
          <a href="#">Yalantis IoT Accelerator</a>
          <a href="#">Yalantis ERP system</a>
          <a href="#">Yalantis Payments</a>
          <a href="#">An AI-powered virtual assistant</a>
          <a href="#">DevOps Accelerator</a>
          <a href="#">Authorization Accelerator</a>
          <a href="#">uCrop</a>
        </div>
        <div className={styles.footer_line_column}>
          <h4>Y-Quality</h4>
        </div>
        <div className={styles.footer_line_column}>
          <h4>Insights</h4>
          <a href="#">FinTech</a>
          <a href="#">Healthcare</a>
          <a href="#">Transportation and mobility</a>
          <a href="#">Manufacturing</a>
          <a href="#">Smart Home and appliances</a>
          <a href="#">Energy and resources</a>
          <a href="#">Real estate</a>
          <a href="#">All articles</a>
        </div>
      </div>
      <div className={styles.footer_line}>
        <div className={styles.footer_line_column}>
          <h4>Industries</h4>
          <a href="#">Fintech</a>
          <a href="#">Healthcare</a>
          <a href="#">Transportation and mobility</a>
          <a href="#">Manufacturing</a>
          <a href="#">Smart home and appliances</a>
          <a href="#">Software products</a>
          <a href="#">Real estate</a>
          <a href="#">Energy consumption management system</a>
        </div>
      </div>
      <div className={styles.footer_line}>
        <div className={styles.footer_line_column}>
          <h2>Soft Does</h2>
          <div className={styles.footer_line_column_images}></div>
          <button onClick={scrollToContacts}>Contact us</button>
          <p>©Copyright 2024 Yalantis - Software engineering and IT consulting company. All rights reserved</p>
        </div>
        <div className={styles.footer_line_column}>
          <a>Cookies notice</a>
          <a>Privacy notice</a>
          <a>Quality policy</a>
          <a>Yalantis Sustainability Policy</a>
        </div>
      </div>
    </footer>
  );
}
