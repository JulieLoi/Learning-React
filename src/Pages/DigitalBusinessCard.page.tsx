import React, { useReducer, useState, useRef, useCallback } from 'react';
import Split from 'react-split';
import { toPng } from 'html-to-image';

import '../stylesheets/split.css';
import styles from '../stylesheets/DigitalBusinessCard.module.css';
import Form from "../components/DigitalBusinessCard/Form.component";
import Information from '../components/DigitalBusinessCard/Information.component';
import Description from '../components/DigitalBusinessCard/Description.component';
import Footer from '../components/DigitalBusinessCard/Footer.component';
import { cardFormReducer } from '../Reducers';

const DigitalBusinessCardPage: React.FC = () => {

    // Split Size
    const [size, setSize] = useState<number[]>(() => {
            let storageSize = localStorage.getItem('split-sizes');
            if (storageSize === null) { return [75, 25] }
            let splitArray = storageSize.split(',');
            return [parseInt(splitArray[0].slice(1)), parseInt(splitArray[1].slice(0, -1))];
        }
    )

    // Initial Form Data and reducer
    const initialState = {
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
        <Split className="split" minSize={450} sizes={size}
            onDrag={(sizes: number[]) => {
                    let newSizes = [Math.round(sizes[0]), 100-Math.round(sizes[0])]
                    setSize(newSizes);
                    localStorage.setItem('split-sizes', JSON.stringify(newSizes));
                }
            }
        >
            <div className={styles["form-section"]}>
                <Form 
                    state={cardState}
                    dispatch={cardDispatch}
                    size={size[0]}
                    downloadFunction={onButtonClick}
                />
            </div>
            <div className={`${styles["card-section"]}`}>
                <div className={styles["card"]}
                    style={{ width: `${size[1] - 5}%`}}  
                    ref={ref}
                >
                    <Information state={cardState} />
                    <Description state={cardState} />
                    <Footer state={cardState} />                    
                </div>
            </div>
        </Split>   
    );
};

export default DigitalBusinessCardPage;
