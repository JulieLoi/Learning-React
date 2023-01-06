import { faker } from '@faker-js/faker';
import Navbar from '../components/AirBnbExperience/Navbar.component';
import Hero from '../components/AirBnbExperience/Hero.component';
import Card from '../components/AirBnbExperience/Card.component';

import styles from '../stylesheets/AirBnbExperience.module.css';
import { ExperienceCard } from '../Types'

const AirBnbExperiencePage = () => {

    // Creates Cards
    const cards: ExperienceCard[] = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price()),
        imageUrl: faker.image.image(240, 240),
        stats: {
            rating: ((Math.random() * 4 + 1).toFixed(1)),
            reviewCount: faker.datatype.number({ max: 500 }),
        },
        location: faker.helpers.arrayElement(["Online", faker.address.country(), faker.address.city()]),
        openSpots: faker.helpers.arrayElement([0, faker.datatype.number({ max: 10 }), faker.datatype.number({ max: 20 })]),
    }));

    /* Airbnb Experience Page */
    return (
        <div className={styles["airbnb-page"]}>
            <Navbar />
            <Hero />

            <div className={styles["card-container"]}>
                {cards.map((card) => (
                    <Card 
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
        </div>
    );
};

export default AirBnbExperiencePage;
