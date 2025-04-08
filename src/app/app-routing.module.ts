import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PropertyListComponent } from "./property/property-list/property-list.component";
import { AddPropertyComponent } from "./property/add-property/add-property.component";
import { RentPropertyComponent } from "./property/rent-property/rent-property.component";
import { PropertyDetailComponent } from "./property/property-detail/property-detail.component";
import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";

const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'rent-property',
    component: RentPropertyComponent
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
