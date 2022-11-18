type ExperienceCard = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    stats: {
        rating: number,
        reviewCount: number,
    }
    location: string,
    openSpots: number,
}


export default ExperienceCard;