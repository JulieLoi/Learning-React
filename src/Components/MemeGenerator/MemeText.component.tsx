import React from 'react';
import useFitText from "use-fit-text";
import styles from '../../stylesheets/MemeGenerator.module.css';

interface IMemeTextProps {
    text: string;
    location: string;
}

const MemeText: React.FC<IMemeTextProps> = ({ text, location }) => {

    // Scales Fontsize
    const { fontSize, ref } = useFitText({ maxFontSize: 200 });

    // Meme Text Component
    return (
        <div className={`${styles["meme-image__text-position"]} ${styles[location]}`}
            ref={ref} style={{ fontSize }}
        >
            <span className={styles["meme-text"]}>
                {text}
                </span>
        </div>
    );
};

export default MemeText;
