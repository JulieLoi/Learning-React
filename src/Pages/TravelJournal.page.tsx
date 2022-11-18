import Navbar from '../components/TravelJournal/Navbar.component';
import Card from '../components/TravelJournal/Card.component';

import styles from '../stylesheets/TravelJournal.module.css';
import cardsData from '../components/TravelJournal/JournalData';

const TravelJournalPage = () => {
  return (
    <div className={styles["travel-journal-page"]}>
        <Navbar />
        {cardsData.map(card => (
            <Card
                key={card.id}
                card={card}
            />
        ))}
    </div>
  );
};

export default TravelJournalPage;
