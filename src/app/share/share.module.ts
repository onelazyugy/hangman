import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { TrimTextPipe, UppercaseTextPipe } from './pipe/app.pipe';

@NgModule({
    declarations: [
        TrimTextPipe,
        UppercaseTextPipe
    ],
    imports: [
        CommonModule, 
        AppAngularMaterialModule,
        AppAngularFlexLayoutModule
    ],
    exports: [
        TrimTextPipe,
        UppercaseTextPipe
    ]
})
export class ShareModule {}
