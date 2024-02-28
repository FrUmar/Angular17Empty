import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { authGuard } from '../services/Auth-Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    canActivate:[authGuard],
  // },
    children:[
      {
      path: 'profile',
    component: MyProfileComponent,
    },{
      path: 'address',
    component: MyAddressComponent,
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
