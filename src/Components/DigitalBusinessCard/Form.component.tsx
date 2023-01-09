import React, { useState, useReducer, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { CardFormEnum } from '../../Enums';
import { BusinessCard } from '../../Types';
import { cardFormReducer } from '../../Reducers';

import restoreIcon from '../../assets/images/DigitalBusinessCard/restore.png';
import cardIcon from '../../assets/images/DigitalBusinessCard/business-card.png';

interface Props {
    dispatch: React.Dispatch<{ type: any; payload?: any; formData?: BusinessCard; }>;
    downloadFunction: () => void;
}

const Form: React.FC<Props> = ({ dispatch, downloadFunction }) => {

    // Initial Form Data and reducer
    const initialState: BusinessCard = {
        info: {
            image: "",
            name: "",
            jobPosition: "",
            personalLink: "",
            emailLink: "https://gmail.google.com/inbox/",
            linkedInLink: "https://www.linkedin.com/",
        },
        desc: {
            aboutText: "",
            interestsText: "",
        },
        footer: {
            twitterLink: "https://twitter.com",
            facebookLink: "http://facebook.com",
            instagramLink: "https://instagram.com",
            githubLink: "https://github.com",
        },
    }
    const [formData, formDataDispatch] = useReducer(cardFormReducer, initialState);
    const [useSubmit, setUseSubmit] = useState<boolean>(false);

    // Updates Original Form State
    useEffect(() => {
        if (!useSubmit) {
            dispatch({ type: CardFormEnum.FillCard, formData: formData });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, useSubmit])

    // Form Component
    return (
        <div className={styles["form-container"]} >
            <div className={styles["form-top"]}>
                <div className={styles["form-top-container"]}>
                    <span className={styles["form-title"]}>Digital Business Card Form</span>
                    <div>
                        <label className={styles["check__container"]}>
                            <span>Automatically Update Card</span>
                            <input type="checkbox" className={styles["check__box"]} 
                                checked={!useSubmit}
                                onChange={() => setUseSubmit(prev => !prev)}
                            />
                            <span className={styles["check__checkmark"]} />
                        </label>
                    </div>
                </div>
                <div className={styles["form-top-container"]}>
                    <div className={styles["form-button"]}>
                        <span>Reset Form </span>
                        <img src={restoreIcon} alt="reset form"
                            className={styles["form-image"]}
                            onClick={() => formDataDispatch({type: CardFormEnum.ResetCard})}
                        />
                    </div>
                    <div className={styles["form-button"]}>
                        <span>Save Card </span>
                        <img src={cardIcon} alt="business card icon" 
                            className={styles["form-image"]}
                            onClick={downloadFunction}
                        />
                    </div>
                </div>
            </div>
    
            <div className={styles["form-scroll"]}>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} 
                className={styles["form"]}
            >
                <div className={styles["form__item"]}>
                    <label htmlFor="name">Full Name:</label>
                    <br />
                    <input 
                        type="text" name="name" id="name" autoComplete="off"
                        value={formData.info.name} placeholder="Full Name" 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.Name, payload: e.target.value})
                        }
                    />
                </div>
                <div className={styles["form__item"]}>
                    <label htmlFor="job-position">Job Position:</label>
                    <br />
                    <input 
                        type="text" name="job-position" id="job-position" autoComplete="off"
                        value={formData.info.jobPosition} placeholder="Job Position" 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.JobPosition, payload: e.target.value})
                        }
                    />
                </div>

                <div className={`${styles["form__item"]} ${styles["column-2"]}`}>
                    <label htmlFor="image">Image Link:</label>
                    <br />
                    <input 
                        type="url" name="image" id="image" autoComplete="off"
                        value={formData.info.image} placeholder="Image Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.Image, payload: e.target.value})
                        }
                    />
                </div>

                <div className={`${styles["form__item"]} ${styles["column-2"]}`}>
                    <label htmlFor="personal-link">Personal Website Link:</label>
                    <br />
                    <input 
                        type="url" name="personal-link" id="personal-link" autoComplete="off"
                        value={formData.info.personalLink} placeholder="Personal Website Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.PersonalLink, payload: e.target.value})
                        }
                    />
                </div>


                <div className={styles["form__item"]}>
                    <label htmlFor="email-link">Email Link:</label>
                    <br />
                    <input 
                        type="url" name="email-link" id="email-link" autoComplete="off"
                        value={formData.info.emailLink} placeholder="Email Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.EmailLink, payload: e.target.value})
                        }
                    />
                </div>


                <div className={styles["form__item"]}>
                    <label htmlFor="linkedIn-link">LinkedIn Link:</label>
                    <br />
                    <input 
                        type="url" name="linkedIn-link" id="linkedIn-link" autoComplete="off"
                        value={formData.info.linkedInLink} placeholder="LinkedIn Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.LinkedInLink, payload: e.target.value})
                        }
                    />
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="about-text">About Section:</label>
                    <TextareaAutosize 
                        name="about-text" id="about-text" autoComplete="off"
                        value={formData.desc.aboutText}
                        placeholder="Write your 'About' section here..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.AboutText, payload: e.target.value})
                        }
                    />
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="interest-text">Interest Section:</label>
                    <br />
                    <TextareaAutosize 
                        name="interest-text" id="interest-text" autoComplete="off"
                        value={formData.desc.interestsText}
                        placeholder="Write your 'Interest' section here..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.InterestsText, payload: e.target.value})
                        }
                    />
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="twitter-link">Twitter Link:</label>
                    <br />
                    <input 
                        type="url" name="twitter-link" id="twitter-link" autoComplete="off"
                        value={formData.footer.twitterLink} placeholder="Twitter Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.TwitterLink, payload: e.target.value})
                        }
                    />
                    
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="facebook-link">Facebook Link:</label>
                    <br />
                    <input 
                        type="url" name="facebook-link" id="facebook-link" autoComplete="off"
                        value={formData.footer.facebookLink} placeholder="Facebook Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.FacebookLink, payload: e.target.value})
                        }
                    />
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="instagram-link">Instagram Link:</label>
                    <br />
                    <input 
                        type="url" name="instagram-link" id="instagram-link" autoComplete="off"
                        value={formData.footer.instagramLink} placeholder="Instagram Link..." 
                        onChange={(e) => 
                            formDataDispatch({type: CardFormEnum.InstagramLink, payload: e.target.value})
                        }
                    />
                </div>

                <div className={styles["form__item"]}>
                    <label htmlFor="github-link">Github Link:</label>
                    <br />
                    <input 
                        type="url" name="github-link" id="github-link" autoComplete="off"
                        value={formData.footer.githubLink} placeholder="Github Link..." 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                            formDataDispatch({type: CardFormEnum.GithubLink, payload: e.target.value})
                        }
                    />
                </div>
            </form>
            </div>
            <button className={styles["submit-button"]} disabled={!useSubmit}
                onClick={() => dispatch({ type: CardFormEnum.FillCard, formData: formData }) }
            >
                Submit Form
            </button>
        </div>
    );
}

export default Form;
