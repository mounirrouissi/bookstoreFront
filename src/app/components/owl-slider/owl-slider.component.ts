import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'app/models/Book';
import { CartItem } from 'app/models/cart';
import { ApiService } from 'app/services/api.service';
import { CartService } from 'app/services/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-slider',
  templateUrl: './owl-slider.component.html',
  styleUrls: ['./owl-slider.component.css']
})
export class OwlSliderComponent implements OnInit {
@Input() category:any
books:Book[]=[]
  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
        loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
     navText: [ '<i class=" fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
        responsive: {
      0: {
        items: 1
      },
      400: {
        items: 5
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private  apiService:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.apiService.getlatestSixBooks(this.category.id).subscribe(
      res=>{this.books=res;
        console.log("latest books==="+res)
      }
    )
  }
  addToCart(book:Book){

    const cartItem=new CartItem(book);
    
    console.log("ddd"+cartItem.name)
    
    
    //TODO ...do the real  work
    
    this.cartService.addItem(cartItem);
    }

}
