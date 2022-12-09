import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/event-organiser/add-event/add-event.component';
import { AllEventComponent } from './components/event-organiser/all-event/all-event.component';
import { EditEventComponent } from './components/event-organiser/edit-event/edit-event.component';
import { LoginComponent } from './components/general/login/login.component';
import { RegisterComponent } from './components/general/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"addEvent",component:AddEventComponent},
  {path:"editEvent/:id",component:EditEventComponent},
  {path:"getAllEvents",component:AllEventComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

