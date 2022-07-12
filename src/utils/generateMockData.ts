import {IPerson} from "../types";

const genRandNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const generateMockData = ():IPerson[] => {

    const documents = [
        {
            name: 'Offer.pdf',
            uri: 'https://ryanmoon.xyz/RyanMoonResume.pdf',
            imageUri: 'https://www.computerhope.com/jargon/d/doc.png',
        },
        {
            name: 'OfferWithLongerName.pdf',
            uri: 'https://ryanmoon.xyz/RyanMoonResume.pdf',
            imageUri: 'https://www.computerhope.com/jargon/d/doc.png',
        },
        {
            name: 'OfferWithEvenLongerName.pdf',
            uri: 'https://ryanmoon.xyz/RyanMoonResume.pdf',
            imageUri: 'https://www.computerhope.com/jargon/d/doc.png',
        }
    ]

    return [
        {
            lastName:'Moon',
            position:'Front End Eng.',
            salary: genRandNumber(200000, 100000),
            documents:[
                documents[0]
            ]
        },
        {
            lastName:'Brazile',
            position:'Full Stack Eng.',
            salary: genRandNumber(200000, 100000),
            documents:[
                documents[0], documents[1]
            ]
        },
        {
            lastName:'Anderson',
            position:'Back Eng Eng.',
            salary: genRandNumber(200000, 100000),
            documents:[
                ...documents, ...documents
            ]
        }
    ]
}