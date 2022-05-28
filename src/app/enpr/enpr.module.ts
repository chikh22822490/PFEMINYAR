import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EnprRoutingModule } from './enpr-routing.module';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
// tslint:disable-next-line:max-line-length
import { CalendarModule, ButtonModule, InputTextModule, ContextMenuModule, DropdownModule, DialogModule, MultiSelectModule, SliderModule, GrowlModule, TabViewModule, CodeHighlighterModule, MessageService, ConfirmationService, CarouselModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import {OrganizationChartModule} from 'primeng/organizationchart';

import { HttpClientModule } from '@angular/common/http';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';

import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
// tslint:disable-next-line:max-line-length
import{MatButtonModule,MatStepperModule,MatIconModule,MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatRadioGroup, MatSidenavModule} from  '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { RTL } from '@progress/kendo-angular-l10n';


import { ListPersonelleComponent } from './personelle/list-personelle/list-personelle.component';
import { AddPersonelleComponent } from './personelle/add-personelle/add-personelle.component';
import { EditPersonelleComponent } from './personelle/edit-personelle/edit-personelle.component';


import { ChartsModule } from 'ng2-charts';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DetailsPersonelleComponent } from './personelle/details-personelle/details-personelle.component';
import { RegisterComponent } from './register/register.component';
import { CardsComponent } from './personelle/cards/cards.component';

import {MatCardModule} from '@angular/material/card';





@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    ListPersonelleComponent, 
    AddPersonelleComponent, 
    EditPersonelleComponent,  
    RegisterComponent, 
    DetailsPersonelleComponent, CardsComponent 
  ],
  imports: [
    RadioButtonModule,
    ChartsModule,
    MatSidenavModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    SliderModule,
    GrowlModule,
    TabViewModule,
    ToastModule,
    HttpClientModule,
    CodeHighlighterModule,
    DataViewModule,
    PanelModule,
    OrganizationChartModule,
    CarouselModule,
    FormsModule,
    CardModule,
    ConfirmDialogModule,
    /*material*/
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

    //MatMomentDateModule


     /*material*/
     ExcelExportModule,
    EnprRoutingModule
  ],
  // Enable Right-to-Left mode for Kendo UI components
  providers:    [DatePipe, MessageService, ConfirmationService, { provide: RTL, useValue: true }],

})
export class EnprModule { }
