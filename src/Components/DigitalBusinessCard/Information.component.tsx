import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { SlEnvolope, SlSocialLinkedin } from 'react-icons/sl';

const Information: React.FC = () => {

    let portrait = "/images/DigitalBusinessCard/default_person.png";
    let email = "https://gmail.google.com/inbox/";
    let linkedin = "https://www.linkedin.com/";

    return (
        <section className={styles["info"]}>
            <img src={portrait} alt="Professional Portrait" className={styles["info__image"]} />
            <h1 className={styles["info__name"]}>Name</h1>
            <h3 className={styles["info__position"]}>Job Position</h3>
            <h4 className={styles["info__personal-link"]}>
                <a href="/#" target="_blank" className={`${styles["info__personal-enabled"]} ${styles["info__personal-disabled"]}`}>
                Personal Website Link
                </a>
            </h4>
            <div className={styles["btn-box"]}>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(email) }
                >
                    <span>
                        <SlEnvolope className={styles["btn-box__img"]} size="1.5rem" /> Email
                    </span>
                </button>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(linkedin)}
                >
                    <span>
                        <SlSocialLinkedin className={styles["btn-box__img"]} size="1.5rem"/> LinkedIn
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Information;

/**
<section className="information">
            <img src="./images/user.png" alt="Professional Person" />
            <h1>Name</h1>
            <h3>Job Position</h3>
            <h4><a href="/#" target="_blank" class="disable-link">Personal Website Link</a></h4>
            <div className="button_container">
                <button type="button" className="info-button"  onClick={email_btn_click.bind(this)}>
                    <span className="button_span">
                        <img src="./images/email.png" alt="LinkedIn Icon" className="button_icon" />
                    </span>
                    <span className="button_span">Email</span>
                </button>
                <button type="button" className="info-button" onClick={linkedin_btn_click.bind(this)}>
                    <span className="button_span">
                        <img src="./images/linkedin.png" alt="LinkedIn Icon" className="button_icon" />
                    </span>
                    <span class="button_span">LinkedIn</span>
                </button>
            </div>
        </section>
 */
