import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TokensComponent } from 'src/app/pages/tokens/tokens.component';
import { PairsComponent } from 'src/app/pages/pairs/pairs.component';
import { AccountsComponent } from 'src/app/pages/accounts/accounts.component';
import { TokenComponent } from 'src/app/pages/tokens/token/token.component';
import { PairComponent } from 'src/app/pages/pairs/pair/pair.component';
import { AccountComponent } from 'src/app/pages/account/account.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'tokens',           component: TokensComponent },
    { path: 'pairs',           component: PairsComponent },
    { path: 'accounts',           component: AccountsComponent },
    {path: 'token/:id', component: TokenComponent},
    {path: 'pair/:id', component: PairComponent},
    {path: 'account/:id', component: AccountComponent},

];
