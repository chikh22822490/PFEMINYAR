
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {DropdownModule} from 'primeng/dropdown';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';
//import { LoginComponent } from './authentification/login/login.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
//import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
 
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
//import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { HeureSuppModule } from './heure-supp/heure-supp.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { UsersComponent } from './user/users/users.component';
import { ConfirmationService, MessageService } from 'primeng/primeng';
import { RTL } from '@progress/kendo-angular-l10n';
import { HomeComponent } from './home/home.component';
//import { TokenInterceptor } from './authentification/shared/interceptor';
//import { AppService } from './authentification/shared/service/app.service';
//import { CookieService } from 'ngx-cookie-service';
//import { Store } from '@ngrx/store';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppAsideModule,MatGridListModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    ToastModule,
    TableModule,
    MatCardModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DropdownModule
  ],
  declarations: [
    AppComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DefaultLayoutComponent, UsersComponent, HomeComponent
  ],

    providers: [ {
      provide: LocationStrategy,
      useClass: HashLocationStrategy},
      MessageService,ConfirmationService,DatePipe, { provide: RTL, useValue: true }
    ],
      bootstrap: [ AppComponent ]
      })
      export class AppModule { }
