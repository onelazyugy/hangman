import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeComponent } from './mode/mode.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: '', component: ModeComponent },
    { path: 'register',  component: RegisterComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}