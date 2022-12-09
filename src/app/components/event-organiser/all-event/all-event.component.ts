import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Utilities/event.service';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.scss']
})
export class AllEventComponent implements OnInit {

  events:any;
  constructor(private _router:Router, private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getAllEvents().subscribe(data => {console.log(data);
    this.events = data;});
    
    }

    getEvent(eventId:number)
    {
      this._eventService.getEvent(eventId).subscribe(data => {console.log(data)});
      this._router.navigate(['/updateEvent/']);

    }
    
    deleteEvent(eventId:number)
    {
      this._eventService.deleteEvent(eventId).subscribe(data => {console.log(data)});
      location.reload();
    }

  }


