import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TokensComponent } from './pages/tokens/tokens.component';
import { PairsComponent } from './pages/pairs/pairs.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountComponent } from './pages/account/account.component';
import { TokenComponent } from './pages/tokens/token/token.component';
import { PairComponent } from './pages/pairs/pair/pair.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TokensComponent,
    PairsComponent,
    AccountsComponent,
    AccountComponent,
    TokenComponent,
    PairComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
