import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { GameComponent } from './game.component';
import { CategoryComponent } from './category/category.component';
import { HangmanComponent } from './hangman/hangman.component';
import { TopscoreComponent } from './topscore/topscore.component';

@NgModule({
    declarations: [
        GameComponent, 
        CategoryComponent,
        HangmanComponent,
        TopscoreComponent
    ],
    imports: [
        CommonModule,
        AppAngularFlexLayoutModule,
        AppAngularMaterialModule
    ]
})
export class GameModule {}