import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './components/body.component';

const appRoutes: Routes = [
{ path: '', component: BodyComponent },
{ path: 'room', component: RoomComponent },
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
