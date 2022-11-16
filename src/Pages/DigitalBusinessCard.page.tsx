import React, { useReducer, useState, } from 'react';
import Split from 'react-split';
import '../stylesheets/split.css';
import styles from '../stylesheets/DigitalBusinessCard.module.css';
import Information from '../components/DigitalBusinessCard/Information.component';
import Description from '../components/DigitalBusinessCard/Description.component';
import Footer from '../components/DigitalBusinessCard/Footer.component';
import Form from "../components/DigitalBusinessCard/Form.component";
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
                />
            </div>
            <div className={`${styles["card-section"]}`}>
                <div className={styles["card"]}
                    style={{ width: `${size[1] - 5}%`,}}
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
