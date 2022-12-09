import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string = "http://localhost:8080/event";
  event:any;


  addEvent(event:any) {
    return this._httpClient.post(this.baseUrl+"/addEvent",event,{responseType:'JSON' as 'text'});
  }

  getAllEvents():Observable<Event>
  {
    return this._httpClient.get<Event>(this.baseUrl+"/getAllEvents");
  }
  
  getEvent(eventId:number)
  {
    return this._httpClient.get(this.baseUrl+"/getEvent/"+eventId,{responseType: 'JSON' as 'text'});
  }

  editEvent(eventId:number){
    return this._httpClient.put(this.baseUrl+"/updateEvent/"+eventId,{responseType: 'JSON' as 'text'});
  }

  deleteEvent(eventId:number)
  {
    return this._httpClient.delete(this.baseUrl+"/deleteEvent/"+eventId,{responseType: 'JSON' as 'text'});
  }

  }






 




