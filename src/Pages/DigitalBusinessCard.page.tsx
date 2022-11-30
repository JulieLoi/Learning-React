import React, { useReducer, useRef, useCallback } from 'react';
import Split from 'react-split';
import { toPng } from 'html-to-image';

import Form from "../components/DigitalBusinessCard/Form.component";
import Card from '../components/DigitalBusinessCard/Card.component';

import '../stylesheets/split.css';
import styles from '../stylesheets/DigitalBusinessCard.module.css';
import { BusinessCard } from '../Types';
import { cardFormReducer } from '../Reducers';

const DigitalBusinessCardPage: React.FC = () => {

    // Initial Form Data and reducer
    const initialState: BusinessCard = {
        image: "",
        name: "",
        jobPosition: "",
        personalLink: "",
        emailLink: "https://gmail.google.com/inbox/",
        linkedInLink: "https://www.linkedin.com/",
        aboutText: "",
        interestsText: "",
        twitterLink: "https://twitter.com",
        facebookLink: "http://facebook.com",
        instagramLink: "https://instagram.com",
        githubLink: "https://github.com",
    }
    const [cardState, cardDispatch] = useReducer(cardFormReducer, initialState);
    

    // Download PNG
    const ref = useRef<HTMLDivElement>(null)
    const onButtonClick = useCallback(() => {
        if (ref.current === null) { return }
        toPng(ref.current, { cacheBust: true, })
          .then((dataUrl) => {
            console.log(ref.current)

            const link = document.createElement('a');
            link.download = 'business-card.png';
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => { console.log(err) })
      }, [ref])

    // Digital Business Card Page
    return (
        <Split className="split" minSize={450} sizes={[75, 30]}>
            <div className={styles["form-section"]}>
                <Form 
                    state={cardState}
                    dispatch={cardDispatch}
                    downloadFunction={onButtonClick}
                />
            </div>
            <div className={`${styles["card-section"]}`}
            >
                <div ref={ref}>
                    <Card 
                        state={cardState}
                    />
                </div>

            </div>
        </Split>   
    );
};

export default DigitalBusinessCardPage;
