import React, { useState, useEffect, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import TextareaAutosize from 'react-textarea-autosize';
import MemeText from './MemeText.component';
import styles from '../../stylesheets/MemeGenerator.module.css';
import { MemeType, MemeDataType } from '../../Types';

const Meme = () => {

    // Handle Meme Data
    const [memesData, setMemesData] = useState<MemeDataType[]>([]);
    const [meme, setMeme] = useState<MemeType>({ topText: "", bottomText: "", imageUrl: "" });

    // Gets Memes Data
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeData => setMemesData(memeData.data.memes))
    }, []);

    // Downloads Meme Image
    const memeRef = useRef<HTMLDivElement>(null)
    const downloadMeme = useCallback(() => {
        if (memeRef.current === null) { return }
        toPng(memeRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'Meme.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => { console.log(err) });
    }, [memeRef]);

    // Handles Form Text Changes
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
        setMeme(prevMeme => 
            ({
                ...prevMeme,
                [event.target.name]: event.target.value
            })
        );
    };

    // Create Meme Component
    return (
        <main className={styles["meme"]}>
            <div className={styles["meme__form"]}>
                <div>
                    <label htmlFor="top-meme" className={styles["meme-label"]}>
                        Top Part of the Meme 
                    </label>
                    <br />
                    <TextareaAutosize
                        name="topText" id="top-meme" placeholder="Top Text"
                        autoComplete="off" value={meme.topText}
                        onChange={handleChange} className={styles["meme-input"]}
                    />
                </div>

                <div>
                    <label htmlFor="bottom-meme" className={styles["meme-label"]}>
                        Bottom Part of the Meme 
                    </label>
                    <br />
                    <TextareaAutosize
                        name="bottomText" id="bottom-meme" placeholder="Bottom Text"
                        autoComplete="off" value={meme.bottomText}
                        onChange={handleChange} className={styles["meme-input"]}
                    />
                </div>

                <button type="button" className={styles["meme-button"]}
                    onClick={() => { setMeme(prevMeme => ({ 
                        ...prevMeme, 
                        imageUrl: memesData[Math.floor(Math.random() * memesData.length)].url 
                    }))}}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className={styles["meme__container"]}>
                {meme.imageUrl !== "" &&
                    <>
                        <div className={styles["created-meme"]} ref={memeRef} >
                            <img src={meme.imageUrl} alt="meme" className={styles["meme-image"]} />
                            <MemeText text={meme.topText} location={"top"} />
                            <MemeText text={meme.bottomText} location={"bottom"} />
                        </div>
                        <br />
                        <button onClick={downloadMeme} className={`${styles["meme-button"]} ${styles["download-button"]}`}>
                            Save Meme
                        </button>
                    </>
                }
            </div>
        </main>
    )
};

export default Meme;
