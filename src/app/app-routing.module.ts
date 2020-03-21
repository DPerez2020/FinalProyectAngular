import { DetailsComponent } from './components/details/details.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Not-found',component:NotFoundComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},//User routes
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'reserve',component:ReserveComponent,canActivate:[AuthGuard]},
  {path:'details',component:DetailsComponent,canActivate:[AuthGuard]},
  {path: '**',redirectTo: 'Not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
