import React, {MutableRefObject, useRef} from 'react';
import {IPerson} from "../../types";
import styles from './rowStyles.module.css'
import {Group} from "@mantine/core";
import {useIntersection} from "@mantine/hooks";
import Document from "../Document";
import CollapsedView from "./CollapsedView/CollapsedView";


interface props {
    person: IPerson
    rowNumber:number
}


const Row: React.FC<props> = ({person,rowNumber}) => {
    const {lastName, salary, documents, position} = person
    const containerRef = useRef(null);
    const [ref, observedEntry] = useIntersection({
        root: containerRef.current,
        threshold: 1,
    });

    return (
        <tr className={`${rowNumber%2 === 0 && styles.rowBackground}`}>
            <td>{lastName}</td>
            <td>{position}</td>
            <td>${salary}</td>
            <td className={styles.container}>
                {/*The Group is always present but becomes hidden when it is no longer fully intersecting the viewport*/}
                <Group ref={containerRef} spacing={'md'} className={`${styles.groupContainer} ${!observedEntry?.isIntersecting && styles.hidden}`} >
                    {documents.length > 0 && documents.map((documentInfo, index) =>{
                        if(documents.length-1 === index){
                            return <Document ref={ref}
                                             key={documentInfo.name}
                                             documentInfo={documentInfo}/>
                        }else{
                            return <Document key={documentInfo.name+index+rowNumber} documentInfo={documentInfo}/>
                        }
                    })}
                </Group>
                {/*The Chevron button and menu are only shown when the documents are not fully intersecting the viewport*/}
                {!observedEntry?.isIntersecting && <CollapsedView documents={documents}/>}
            </td>
        </tr>
    );
};

export default Row;
