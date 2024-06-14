import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccontingSettingComponent } from './acconting-setting/acconting-setting.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent , data:{title:'Dasboard'}},
            { path: 'grafica1', component: Grafica1Component ,data:{title:'Grafica'} },
            { path: 'progress', component: ProgressComponent , data:{title:'progress'}},
            { path: 'rxjs', component: RxjsComponent,data:{title:'Rxjs'}},
            { path: 'promesas', component: PromesasComponent , data:{title:'promesas'}},
            { path: 'account-settings', component: AccontingSettingComponent , data:{title:'account-settings'}},
          
        ]
    }

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]


})
export class PagesRoutingModule { }
