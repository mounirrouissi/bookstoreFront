import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  doSearch(text:string){
    console.log("text="+text);
    this.router.navigateByUrl('/search/'+text)

  }
}
