import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class Carousel1Component implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 100, 368].map((n) => `https://picsum.photos/id/${n}/1650/500`);
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
