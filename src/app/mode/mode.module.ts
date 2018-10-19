import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeComponent } from './mode.component';
import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';

@NgModule({
    declarations: [
        ModeComponent
    ],
    imports: [
        CommonModule,
        AppAngularFlexLayoutModule,
        AppAngularMaterialModule
    ]
})
export class ModeModule {}