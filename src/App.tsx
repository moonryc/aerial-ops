import {generateMockData} from "./utils/generateMockData";
import {IPerson} from "./types";
import {Table} from "@mantine/core";
import Row from "./components/Row";


const mockData: IPerson[] = generateMockData()


function App() {
    return (
        <div>
            <Table className={'customTable'}>
                <thead>
                <tr>
                    <th className={'colWidth20'}>Last Name</th>
                    <th className={'colWidth20'}>Position</th>
                    <th className={'colWidth20'}>Salary</th>
                    <th className={'colWidth40'}>Documents</th>
                </tr>
                </thead>
                <tbody>
                {mockData.length>0 && mockData.map((person,index)=>(
                    <Row key={index} person={person} rowNumber={index}/>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default App
