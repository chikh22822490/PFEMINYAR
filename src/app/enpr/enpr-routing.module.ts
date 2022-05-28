import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonelleComponent } from './personelle/list-personelle/list-personelle.component';
import { AddPersonelleComponent } from './personelle/add-personelle/add-personelle.component';
import { EditPersonelleComponent } from './personelle/edit-personelle/edit-personelle.component';
import { RegisterComponent } from './register/register.component';
import { DetailsPersonelleComponent } from './personelle/details-personelle/details-personelle.component';
import { CardsComponent } from './personelle/cards/cards.component';



const routes: Routes = [ {path: '', data: {title: 'enpr1'},
children: [

  
  {path:"list-personelle" , component: ListPersonelleComponent },
  {path:"add-personelle" , component: AddPersonelleComponent },
  {path:"edit-personelle" , component: EditPersonelleComponent },
  {path:"details-personelle" , component: DetailsPersonelleComponent },
  {path: 'register' , component: RegisterComponent },
  {path: 'cards' , component: CardsComponent },

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnprRoutingModule { }
