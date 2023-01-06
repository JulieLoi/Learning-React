import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from '../components/Home/ProjectCard.component';
import styles from '../stylesheets/Home.module.css';
import { cards } from '../components/Home/ProjectData';

const HomePage = () => {

    // Carousel Responsive
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.

        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.

        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.

        }
    };

    // Home Page
    return (
        <div className={styles["home-page"]}>
            <div className={styles["home-container"]}>
                <div className={styles["home-introduction"]}>
                    <h1><b><u>React Projects</u></b></h1>
                    <p>
                        This website is bulit from a React application that contains multiple projects that have been recreated 
                        and updated using TypeScript and CSS modules after following the "
                        <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noreferrer" className={styles["home-link"]}>
                        Scrimba - Learn React</a>" course. The Scrimba course walked through some projects while also having
                        solo projects.
                        <br />
                        The project is located in the following Github repository:&nbsp;
                            <a href="https://github.com/JulieLoi/Learning-React" target="_blank" rel="noreferrer" className={styles["home-link"]}>
                                Learning React
                            </a>
                    </p>
                    <p>
                        An <u>updated project</u> is a project that had a walkthrough on building it, which I updated and improved.
                        <br />
                        A <u>solo project</u> is a project that did not have a walkthrough but was given as an assignment in 
                        Scrimba for practice.
                    </p>
                </div>

                <Carousel
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        showDots={true}
                        arrows={false}
                        infinite={true}
                        partialVisible={true}
                        focusOnSelect={true}
                        customTransition="transform 500ms ease-in-out"

                        containerClass={styles["project-cards"]}
                        itemClass={styles["carousel-item"]}
                        dotListClass={styles["carousel-dots"]}

                        autoPlay={true}
                        autoPlaySpeed={10000}
                    >
                        {cards.map(card => <Card key={card.id} card={card} />)}
                    </Carousel>;
            </div>
        </div>
    );
}

export default HomePage;