import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'angular-ng-stepper';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule,CdkStepperModule,
    NgStepperModule ],
  declarations: [ AppComponent, HelloComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
