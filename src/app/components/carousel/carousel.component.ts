import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 100, 368].map((n) => `https://picsum.photos/id/${n}/1650/500`);
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
