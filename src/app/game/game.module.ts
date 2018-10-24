import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppAngularFlexLayoutModule } from '../app-angular-flex-layout.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { GameComponent } from './game.component';
import { CategoryComponent } from './category/category.component';
import { HangmanComponent } from './hangman/hangman.component';
import { TopscoreComponent } from './topscore/topscore.component';
import { AttemptComponent } from './hangman/attempt/attempt.component';
import { GuessComponent } from './hangman/guess/guess.component';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [
        GameComponent, 
        CategoryComponent,
        HangmanComponent,
        TopscoreComponent, 
        AttemptComponent,
        GuessComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppAngularFlexLayoutModule,
        AppAngularMaterialModule,
        ShareModule
    ]
})
export class GameModule {}