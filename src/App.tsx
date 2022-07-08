import {generateMockData} from "./utils/generateMockData";
import {IPerson} from "./types";
import {Table} from "@mantine/core";
import Row from "./components/Row";


const mockData: IPerson[] = generateMockData()


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
                    <Row key={index} person={person} rowNumber={index}/>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default App
