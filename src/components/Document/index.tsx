import React, {ForwardedRef} from 'react';
import styles from "./documentStyles.module.css";
import {IDocument} from "../../types";

interface props {
    documentInfo:IDocument
}

const Document:React.FC<props> = React.forwardRef(({documentInfo},ref:ForwardedRef<any>) => {
    const {name,imageUri, uri}= documentInfo
    return (
        <div ref={ref}>
            <div className={styles.document} ><img src={imageUri} alt={''}/><a
                href={uri}>{name}</a></div>
        </div>
    );
});

export default React.memo(Document);
