import { faker } from '@faker-js/faker';
import { JournalCard } from '../../Types';

const card1: JournalCard = {
    id: faker.datatype.uuid(),
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg"
};

const card2: JournalCard = {
    id: faker.datatype.uuid(),
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl: "https://goo.gl/maps/UbxTSzyvZbBQeYCRA",
    startDate: "27 May, 2021", 
    endDate: "8 Jun, 2021",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg"
};

const card3 = {
    id: faker.datatype.uuid(),
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl: "https://goo.gl/maps/GEggge1wcU69Eq2z8",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/1200px-Geirangerfjord_.jpg"
}

const cardsData = [card1, card2, card3];


export default cardsData;