import { DetailsComponent } from './components/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavigationComponent } from './components/partials/navigation/navigation.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/partials/hero/hero.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { FilterComponent } from './components/partials/filter/filter.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
     LoginComponent, RegisterComponent, HomeComponent, NotFoundComponent, 
     NavigationComponent, FooterComponent, DashboardComponent, HeroComponent,
      ProfileComponent, ReserveComponent,DetailsComponent, FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirePerformanceModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  schemas:[],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
