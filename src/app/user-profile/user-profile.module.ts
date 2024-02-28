import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [MyAddressComponent,MyProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
  ],exports:[MyAddressComponent,MyProfileComponent]
})
export class UserProfileModule { }
