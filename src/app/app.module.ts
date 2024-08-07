import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './userPanel/shared/header/header.component';
import { HomeComponent } from './userPanel/home/home.component';
import { UsersListComponent } from './userPanel/home/usersList/usersList.component';
import { UsersDetailsComponent } from './userPanel/home/usersDetails/usersDetails.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './userPanel/loading/loading.component';
import { Error404Component } from './userPanel/error404/error404.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userEffects } from './userPanel/store/User.Effects';
import { UserReducer } from './userPanel/store/User.Reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Material.Module';
import { AddUserComponent } from './userPanel/home/add-user/add-user.component';
import { OnlyNumbersDirective } from './userPanel/CustomsDirectives/onlyNumbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersListComponent,
    UsersDetailsComponent,
    LoadingComponent,
    Error404Component,
    AddUserComponent,
    OnlyNumbersDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ users: UserReducer }, {}),
    EffectsModule.forRoot([userEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
