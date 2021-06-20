import { Component } from '@angular/core';
import { Category } from './models/category';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testSvg';
 categories:Category[]=[]

  constructor(private service:ApiService) { }

  public async ngOnInit() {
    this.getCategories();
    
  }
  getCategories() {
    this.service.getCategories().subscribe(
      resp=>{this.categories=resp}
    );
    }
  deleteAccept(s:any)
  {
console.log(s);
  }
}
