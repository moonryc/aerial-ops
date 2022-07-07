import React, {useEffect, useRef, useState} from 'react';
import {IDocument, IPerson} from "../../types";
import styles from './styles.module.css'
import {Group} from "@mantine/core";
import {useElementSize, useIntersection} from "@mantine/hooks";

interface props {
    person: IPerson
}


const Row: React.FC<props> = ({person}) => {
    const {lastName, salary, documents, position} = person
    const containerRef = useRef(null);
    const [ref, observedEntry] = useIntersection({
        root: containerRef.current,
        threshold:1,
    })





    return (
        <tr>
            <td>{lastName}</td>
            <td>{position}</td>
            <td>${salary}</td>
            <td ref={containerRef}>
                <Group spacing={'md'} className={styles.container}>
                    {documents.length > 0 && documents.map(({name, imageUri, uri}, index) => (
                        <div className={styles.document} key={index}><img src={imageUri} alt={''}/><a
                            href={uri}>{name}</a></div>
                    ))}
                </Group>
            </td>
        </tr>
    );
};

export default Row;
