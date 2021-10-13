import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'app/models/Book';
import { forEachChild } from 'typescript';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Book[], filterDate:Date ,propName:string): any[] {



   const val=[];


   
 
return value

.sort(
  (a,b)=>{
    return a.datePublished!!.getDate() - b.datePublished!!.getDate() ;
  } );
  


    

    }


}