import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeComponent } from './mode/mode.component';
import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
    { path: '', component: ModeComponent },
    { path: 'register',  component: RegisterComponent},
    { path: 'game',  component: GameComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}