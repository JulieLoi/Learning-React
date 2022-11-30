import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { CardFormEnum } from '../../Enums';


interface Props {
    state: any;
    dispatch: React.Dispatch<{ type: any; payload: any; }>;
    downloadFunction: () => void;
}

const Form: React.FC<Props> = ({ state, dispatch, downloadFunction }) => {

    // Handle Submit (Prevent Page Refresh)
    const handleSubmit = (event: any) => {
        event.preventDefault();
    };

    // Form Component
    return (
        <div className={styles["form-container"]} >
            <div className={styles["form-top"]}>
                <span className={styles["form-title"]}>Digital Business Card Form</span>
                <div className={styles["form-save"]}>
                    <span>Save Card - </span>
                    <img src="/images/DigitalBusinessCard/business-card.png" alt="business card icon" 
                        className={styles["form-image"]}
                        onClick={downloadFunction}
                    />
                </div>
            </div>
    
            <div className={styles["form-scroll"]}>
            <form onSubmit={handleSubmit} className={styles["form"]}>
            <div className={styles["form__item"]}>
                <label htmlFor="name">Full Name:</label>
                <br />
                <input 
                    type="text" name="name" id="name" autoComplete="off"
                    value={state.name} placeholder="Full Name" 
                    onChange={(e) => dispatch({type: CardFormEnum.Name, payload: e.target.value})}
                />
            </div>
            <div className={styles["form__item"]}>
                <label htmlFor="job-position">Job Position:</label>
                <br />
                <input 
                    type="text" name="job-position" id="job-position" autoComplete="off"
                    value={state.jobPosition} placeholder="Job Position" 
                    onChange={(e) => dispatch({type: CardFormEnum.JobPosition, payload: e.target.value})}
                />
            </div>

            <div className={`${styles["form__item"]} ${styles["column-2"]}`}>
                <label htmlFor="image">Image Link:</label>
                <br />
                <input 
                    type="url" name="image" id="image" autoComplete="off"
                    value={state.image} placeholder="Image Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.Image, payload: e.target.value})}
                />
            </div>

            <div className={`${styles["form__item"]} ${styles["column-2"]}`}>
                <label htmlFor="personal-link">Personal Website Link:</label>
                <br />
                <input 
                    type="url" name="personal-link" id="personal-link" autoComplete="off"
                    value={state.personalLink} placeholder="Personal Website Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.PersonalLink, payload: e.target.value})}
                />
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="email-link">Email Link:</label>
                <br />
                <input 
                    type="url" name="email-link" id="email-link" autoComplete="off"
                    value={state.emailLink} placeholder="Email Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.EmailLink, payload: e.target.value})}
                />
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="linkedIn-link">LinkedIn Link:</label>
                <br />
                <input 
                    type="url" name="linkedIn-link" id="linkedIn-link" autoComplete="off"
                    value={state.linkedInLink} placeholder="LinkedIn Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.LinkedInLink, payload: e.target.value})}
                />
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="about-text">About Section:</label>
                <TextareaAutosize 
                    name="about-text" id="about-text" autoComplete="off"
                    placeholder="Write your 'About' section here..." 
                    onChange={(e) => dispatch({type: CardFormEnum.AboutText, payload: e.target.value})}
                />
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="interest-text">Interest Section:</label>
                <br />
                <TextareaAutosize 
                    name="interest-text" id="interest-text" autoComplete="off"
                    placeholder="Write your 'Interest' section here..." 
                    onChange={(e) => dispatch({type: CardFormEnum.InterestsText, payload: e.target.value})}
                />
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="twitter-link">Twitter Link:</label>
                <br />
                <input 
                    type="url" name="twitter-link" id="twitter-link" autoComplete="off"
                    value={state.twitterLink} placeholder="Twitter Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.TwitterLink, payload: e.target.value})}
                />
                
            </div>


            <div className={styles["form__item"]}>
                <label htmlFor="facebook-link">Facebook Link:</label>
                <br />
                <input 
                    type="url" name="facebook-link" id="facebook-link" autoComplete="off"
                    value={state.facebookLink} placeholder="Facebook Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.FacebookLink, payload: e.target.value})}
                />
            </div>

            <div className={styles["form__item"]}>
                <label htmlFor="instagram-link">Instagram Link:</label>
                <br />
                <input 
                    type="url" name="instagram-link" id="instagram-link" autoComplete="off"
                    value={state.instagramLink} placeholder="Instagram Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.InstagramLink, payload: e.target.value})}
                />
            </div>

            <div className={styles["form__item"]}>
                <label htmlFor="github-link">Github Link:</label>
                <br />
                <input 
                    type="url" name="github-link" id="github-link" autoComplete="off"
                    value={state.githubLink} placeholder="Github Link..." 
                    onChange={(e) => dispatch({type: CardFormEnum.GithubLink, payload: e.target.value})}
                />
            </div>
            </form>
            </div>
        </div>
    );
}

export default Form;
