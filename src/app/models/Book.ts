import { Author } from "./Author";

export interface Book{
    
     id:number,
     name:string,
     ratings:number,
     authors:Author[],
     price:number,
     description:string,
     imageUrl:string,
     unitsInStock?:number,
     datePublished?:Date,
     dateUpdated?:Date,
     
  }

 