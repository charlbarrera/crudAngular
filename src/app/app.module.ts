import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ListUsersComponent } from './list-users/list-users.component';
import { TableUsersComponent } from './create-user/table-users/table-users.component';

const appRouter: Routes=[
  {path:'', component: ListUsersComponent},
  {path:'create', component: CreateUserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateUserComponent,
    ListUsersComponent,
    TableUsersComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
