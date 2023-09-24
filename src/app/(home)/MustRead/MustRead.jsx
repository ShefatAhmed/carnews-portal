import React from 'react';

const MustRead = () => {
    const cardsData = [
        {
            id: 1,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/48-300x194.jpg',
            heading: 'Scenes From the Pebble Beach Tour d’Elegance',
        },
        {
            id: 2,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/47-300x194.jpg',
            heading: '’70s F1 cars will star at the Goodwood Festival',
        },
        {
            id: 3,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/46-300x194.jpg',
            heading: '’Could Your Child Win a Season’s Racing?',
        },
        {
            id: 4,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/45-300x194.jpg',
            heading: 'Discover Octane’s Amazing Festival of Speed',
        },
        {
            id: 5,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/44-300x194.jpg',
            heading: 'Motorsport Goes to the Movies in 2016',
        },
        {
            id: 6,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/43-300x194.jpg',
            heading: 'BRMs Go Back to Blyton for This Season’s Finale',
        },
        {
            id: 7,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/42-300x194.jpg',
            heading: 'All the best bits of Goodwood Motorsport',
        },
        {
            id: 8,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/41-300x194.jpg',
            heading: 'LaFerrari, McLaren P1, and Porsche 918 On-Track',
        },
        {
            id: 9,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/40-300x194.jpg',
            heading: 'Mercedes-Benz Plans GLE Hybrid to Debut in New York',
        },
        {
            id: 10,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/39-300x194.jpg',
            heading: 'Two New Scion Models Confirmed for New York',
        },
        {
            id: 11,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/38-300x194.jpg',
            heading: 'Aston Martin DBX Concept: Gorgeous Electric Car',
        },
        {
            id: 12,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/37-300x194.jpg',
            heading: 'Acura to Bring Updated RDX to Chicago’s Auto Show',
        },
        {
            id: 13,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/36-300x194.jpg',
            heading: 'Our Picks for the Very Best from the 2015 Auto Show',
        },
        {
            id: 14,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/35-1-300x194.jpg',
            heading: '2016 Audi Q7’s Early Debute at Detroit',
        },
        {
            id: 15,
            imageSrc: 'https://demo.tagdiv.com/newsmag_cars/wp-content/uploads/2016/05/34-300x194.jpg',
            heading: 'The Superest Supercars from Geneva',
        }
    ];
    return (
        <div className='px-9'>
            <div className='flex justify-between'>
                <h1 className="inline bg-purple-600 text-white  px-2">Must Read</h1>
                <select>
                    <option>All News</option>
                    <option>Electric Cars</option>
                    <option>Classic Cars</option>
                    <option>Auto Show</option>
                </select>
            </div>
            <div className="container mx-auto py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {cardsData.map((card) => (
                        <div key={card.id}>
                            <img src={card.imageSrc} className="w-full h-36" />
                            <div>
                                <h3 className='font-bold'>{card.heading}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MustRead;