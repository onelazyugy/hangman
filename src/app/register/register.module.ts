import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AppAngularFlexLayoutModule,
        AppAngularMaterialModule
    ]
})
export class RegisterModule {}
