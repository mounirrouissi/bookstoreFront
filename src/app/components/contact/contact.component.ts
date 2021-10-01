import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'app/models/Feedback';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message:string='';

  model: Feedback= {
    name: '',
    email: '',
    feedback: ''
  };

  constructor(private fb:FormBuilder,private apiService:ApiService) { 
    
  }

  ngOnInit(): void {
  }

  sendFeedback(): void {

      this.apiService.postFeedback(this.model).subscribe(
       (res) => {
         this.message="Message Sent Successfuly";
         location.reload
       },
       err => {
         alert("An error has occurred while sending feedback");
       }
     );
   }
   

}

