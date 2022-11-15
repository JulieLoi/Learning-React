import React, { useState, useEffect } from 'react';
import Split from 'react-split';

import '../stylesheets/split.css';
import styles from '../stylesheets/DigitalBusinessCard.module.css';
import About from '../Components/DigitalBusinessCard/About.component';
import Information from '../Components/DigitalBusinessCard/Information.component';
import Interests from '../Components/DigitalBusinessCard/Interests.component';
import Footer from '../Components/DigitalBusinessCard/Footer.component';
import Form from "../Components/DigitalBusinessCard/Form.component";

/***
 * Design Plan
 * Make it split screen
 * Form on one side
 * The Digital Business Card Page on the other side.
 */



const DigitalBusinessCardPage: React.FC = () => {

    const [formData, setFormData] = React.useState(
        {
            firstName: "", lastName: "", email: "", 
            comments: "",
            isFriendly: false,
            employment: "",
            favColor: ""
        }
    )

    // Split Size
    const [size, setSize] = useState<number[]>(() => {
            let storageSize = localStorage.getItem('split-sizes');
            if (storageSize === null) { return [75, 25] }
            let splitArray = storageSize.split(',');
            return [parseInt(splitArray[0].slice(1)), parseInt(splitArray[1].slice(0, -1))];
        }
    )
    

    return (
        <Split className="split" minSize={400} sizes={size} 
            onDragEnd={(sizes: number[]) => {
                    setSize(sizes);
                    localStorage.setItem('split-sizes', JSON.stringify(sizes));
                }
            }
        >
            <div className={`${styles["pane"]} ${styles["form"]}`}>
                <Form 
                    formData={formData}
                    setFormData={setFormData}
                />
            </div>
            
            <div className={`${styles["body"]}`}>
                <div className={`${styles["pane"]} ${styles["card"]}`}>
                    <Information />
                    <About />
                    <Interests />
                    <Footer />
                </div>
            </div>
           
        </Split>   
    );
};

export default DigitalBusinessCardPage;
