import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'Movies', component:MoviesComponent },
  {path:'Tv', component:TVComponent},
  {path:'login', component:LoginComponent },
  {path:'Registration', component:RegistrationComponent },
  {path:'People', component:PeopleComponent },
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
