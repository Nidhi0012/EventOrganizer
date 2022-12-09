import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Utilities/event.service';






@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  event:any;
  message: any;
  
  constructor(private _route:Router, private _fb:FormBuilder, private _eventService:EventService) { }

  ngOnInit(): void {
  }
 addeventForm:FormGroup= this._fb.group({
  eventName:[''],
  eventDescription:[''],
  eventDate:[''],
  eventLocation:[''],
  eventPrice:['']
});


addEvent()
{
  this._eventService.addEvent(this.addeventForm.value).subscribe((response:any) => {console.log(response);this.message = response});
  setTimeout(() => {
    this._route.navigate(["/getAllEvents"]);
},1000);
}




}
