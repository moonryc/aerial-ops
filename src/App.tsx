import {randomNumGen} from "./utils/randomNumGen";
import {IPerson} from "./types";
import {Table} from "@mantine/core";
import Row from "./components/Row";

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

const mockData: IPerson[] = [
    {
        lastName:'Moon',
        position:'Front End Eng.',
        salary: randomNumGen(200000, 100000),
        documents:[
            documents[0]
        ]
    },
    {
        lastName:'Brazile',
        position:'Full Stack Eng.',
        salary: randomNumGen(200000, 100000),
        documents:[
            ...documents
        ]
    },
    {
        lastName:'Anderson',
        position:'Back Eng Eng.',
        salary: randomNumGen(200000, 100000),
        documents:[
            ...documents, ...documents
        ]
    }
]


function App() {
    return (
        <div className="App">
            <Table>
                <thead>
                <tr>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Documents</th>
                </tr>
                </thead>
                <tbody>
                {mockData.length>0 && mockData.map((person,index)=>(
                    <Row key={index} person={person}/>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default App
