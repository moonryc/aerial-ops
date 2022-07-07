
export interface IPerson {
    lastName:string
    position:string
    salary:number
    documents:IDocument[]
}


export interface IDocument {
    name:string
    uri:string
    imageUri:string
}