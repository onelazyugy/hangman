import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { GameComponent } from './game.component';

@NgModule({
    declarations: [
        GameComponent
    ],
    imports: [
        CommonModule,
        AppAngularFlexLayoutModule,
        AppAngularMaterialModule
    ]
})
export class GameModule {}