import * as React from 'react';

interface IMemeProps {
}

const Meme: React.FC<IMemeProps> = ({  }) => {
  return ;
};

export default Meme;

/**
 let [allMemes, setAllMemes] = React.useState([]);
    let [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: ""
        }
    )

    // Gets Memes Data
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeData => setAllMemes(memeData.data.memes))
    }, [])

    // Gets a new Meme Image
    function getMemeImage() {
        let memeSelected = allMemes[Math.floor(Math.random()*allMemes.length)];
        let memeUrl = memeSelected.url;
        setMeme(prevMeme => 
            ({
                ...prevMeme,
                randomImage: memeUrl
            })
        )
    }

    // Handles Form Text Chanegs
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main className="Meme">
            <div className="form">
                <label for="top-meme">Top Part of the Meme </label>
                <label for="bottom-meme">Bottom Part of the Meme </label>
                <input type="text" id="top-meme" placeholder="Top Text" 
                    name="topText" value={meme.topText} onChange={handleChange}
                />
                <input type="text" id="bottom-meme" placeholder="Bottom Text" 
                    name="bottomText" value={meme.bottomText} onChange={handleChange}
                />
                <button type="button" className="button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme-container">
                {meme.randomImage !== "" && 
                    <div className="created-meme">
                        <img src={meme.randomImage} alt="Meme" className="meme-image" />
                        <h2 className="meme-text top">{meme.topText}</h2>
                        <h2 className="meme-text bottom">{meme.bottomText}</h2>
                    </div>
                }
            </div>
        </main>
    );
 */