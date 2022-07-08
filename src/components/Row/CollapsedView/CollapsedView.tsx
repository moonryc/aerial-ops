import React from 'react';
import Chevron from "../../../assets/icons/Chevron";
import styles from './collapsedViewStyles.module.css'
import {ActionIcon, Menu, Stack} from "@mantine/core";
import {IDocument} from "../../../types";
import Document from "../../Document";
import {useDisclosure} from "@mantine/hooks";


interface props {
    documents: IDocument[]
}

const CollapsedView: React.FC<props> = ({documents}) => {

    const isMoreThanFour = documents.length > 4
    const heightOfADocument = 54 //pixels See documentStyles.module.css
    const spacingBetweenItems = 40 //pixels manually calculated
    const [opened, handlers] = useDisclosure(false)

    return (
        <>
            <div className={styles.container}>
                Documents
                <Menu opened={opened} onOpen={handlers.open} onClose={handlers.close} size={"xl"} control={<ActionIcon radius={'xl'}>
                    <Chevron isOpen={opened}/>
                </ActionIcon>
                }>
                    <Stack spacing={'lg'} sx={{
                        maxHeight: isMoreThanFour ? (heightOfADocument + spacingBetweenItems) * 4 + 'px' : '100%',
                        overflowY: isMoreThanFour ? 'scroll' : 'hidden'
                    }}>
                        {documents.length > 0 && documents.map((documentInfo, index) => (
                            <Menu.Item><Document documentInfo={documentInfo}/></Menu.Item>
                        ))}
                    </Stack>
                </Menu>
            </div>
        </>
    );
};

export default CollapsedView;
