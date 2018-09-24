import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { JoggingComponent } from './jogging/jogging.component';
import { JoggingDetailComponent } from './jogging-detail/jogging-detail.component';
import { JoggingCreateComponent } from './jogging-create/jogging-create.component';
import { JoggingEditComponent } from './jogging-edit/jogging-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [
  {
    path: 'joggings',
    component: JoggingComponent,
    data: { title: 'Jogging List' }
  },
  {
    path: 'jogging-details/:id',
    component: JoggingDetailComponent,
    data: { title: 'Jogging Details' }
  },
  {
    path: 'jogging-create',
    component: JoggingCreateComponent,
    data: { title: 'Create Jogging' }
  },
  {
    path: 'jogging-edit/:id',
    component: JoggingEditComponent,
    data: { title: 'Edit Jogging' }
  },
  // { path: '',
  //   redirectTo: '/joggings',
  //   pathMatch: 'full'
  // },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("45762939245-t5b433inqle05dik95jkol4n4paupdk9.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    JoggingComponent,
    JoggingDetailComponent,
    JoggingCreateComponent,
    JoggingEditComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
