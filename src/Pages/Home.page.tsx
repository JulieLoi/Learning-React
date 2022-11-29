import Card from '../components/Home/ProjectCard.component';
import styles from '../stylesheets/Home.module.css';
import { cards } from '../components/Home/ProjectData';

const HomePage = () => {

    // Home Page
    return (
        <div className={styles["home-page"]}>
            Home Page
            <div>
                Add a text section that introduces the "Learning React" project....
                What i have learned from each project, etc.
            </div>

            <div>
                Paletton Color Palettle
                <a href="https://paletton.com/#uid=63h0R0kcjOx4d+c8NW2e+Dcgytl" target="_blank" rel="noreferrer">Link</a>
            </div>

            <div>
                <b>
                    Fix DIgital Card (fix the page... still not saving card image.)
                    <br />
                    Jokes Cards (Fix how the cards are made... add light/dark mode)
                    <br />
                    Fix Color Scheme of Tenzies and scroll of Tenzies
                    <br />
                    SAVE NOTES IN Note APP
                    <br />
                    Fix travel journal images
                    <br />
                    React Facts: Fix light/dark toggle
                </b>
            </div>
            <div className={styles["project-cards"]}>
                {cards.map(card => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
}

export default HomePage;