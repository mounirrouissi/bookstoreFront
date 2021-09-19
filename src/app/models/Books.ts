import { Book } from "./Book";

export interface Books{
  
  content:
  { 
  books:Book[]
},
 

  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  

}