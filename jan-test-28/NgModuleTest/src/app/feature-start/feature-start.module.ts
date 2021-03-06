import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureStartRoutingModule } from './feature-start-routing.module';
import { FeatureStartComponent } from './feature-start.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import {AppMaterialModule} from '../app-material/app-material.module';



@NgModule({
  declarations: [FeatureStartComponent],
  imports: [
    CommonModule,
    FeatureStartRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class FeatureStartModule { }
