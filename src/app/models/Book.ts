export interface Book{
    
     id:number,
     price:number,
     imageUrl:string,
     name:string,
     dateCreated:Date,
     dateUpdated:Date,
     page? : {
          totalPAges:number,
          totalElements:number,
          size:number,
          number:number
     }

}
