export class Address {
    street!: string;
    city!: string;
    state!: string;
     country!: string;
     zipCode?: string;

     constructor(a:string,b:string,c:string,d:string){
         this.street=a;
         this.city=b;
         this.state=c;
this.country=d;
     }
}
