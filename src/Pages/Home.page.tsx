import Card from '../components/Home/ProjectCard.component';
import styles from '../stylesheets/Home.module.css';
import { cards } from '../components/Home/ProjectData';

const HomePage = () => {

    // Home Page
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-container"]}>
                Home Page
                <div>
                    Add a text section that introduces the "Learning React" project....
                    What i have learned from each project, etc.
                </div>

                <div>
                    Paletton Color Palettle
                    <a href="https://paletton.com/#uid=63h0R0kcjOx4d+c8NW2e+Dcgytl" target="_blank" rel="noreferrer">Link</a>
                </div>


                <div className={styles["project-cards"]}>
                    {cards.map(card => <Card key={card.id} card={card} />)}
                </div>
            </div>
        </div>
    );
}

export default HomePage;