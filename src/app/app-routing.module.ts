import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NotifyComponent } from './notify/notify.component';
import { Client1Component } from './client1/client1.component';

export const routes: Routes = [
    { path: '', redirectTo: '/notifications', pathMatch: 'full' },
    { path: 'notifications', component: NotifyComponent },
    { path: 'client1', component: Client1Component },
];

export class AppRoutingModule {}