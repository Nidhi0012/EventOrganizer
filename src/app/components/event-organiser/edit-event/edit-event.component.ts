import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Utilities/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  constructor(private _fb:FormBuilder,private _router:Router,private _activatedRoute:ActivatedRoute,private _eventService:EventService) { }
  
  id:any;
  event:any;

  ngOnInit(): void{
    this._activatedRoute.params.subscribe(params => {
      this.id=params['id'];})

      this.event = this._eventService.getEvent(this.id).subscribe((response:any) => (this.event = response));
    console.log(this.id);
    console.log(this.event);
  }

  editEventForm:FormGroup = this._fb.group({
    eventName:[''],
    eventDescription:[''],
    eventDate:[''],
    eventLocation:[''],
    eventPrice:['']

  })

  editEvent()
  {
    this._eventService.editEvent(this.editEventForm.value).subscribe(response => {console.log(response)});
    setTimeout(() => {
      this._router.navigate(['/getAllEvents']);
    }, 1000);
  }

    
  }




