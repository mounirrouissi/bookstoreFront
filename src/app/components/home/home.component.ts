import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'app/models/Book';
import { Category } from 'app/models/category';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:Category[]=[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe(
      res=>this.categories=res
    );
  }

  
  getBooks() {

}
}

