
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { b_LoginComponent } from './b_login/login.component';
import { c_LoginComponent } from './c_login/login.component';

import { AdmindashboardComponent} from './b_admindashboard/admindashboard.component';
import{CustomerComponent} from './b_customer/customer.component';
import{ AgentComponent } from './b_agent/agent.component';
import{AgentregistrationComponent} from './b_agentregistration/agentregistration.component';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
import { AdminupdatecomponentComponent } from './b_adminupdatecomponent/adminupdatecomponent.component'

import { AgentmainComponent } from './c_agentmain/agentmain.component';
import { ViewcustomerComponent } from './c_viewcustomer/viewcustomer.component';
import { ViewtransactionComponent } from './c_viewtransaction/viewtransaction.component';
import { ApproveCustComponent } from './c_approve-cust/approve-cust.component';
import { AuthGuard } from './auth.guard';


import { StartpageComponent } from './startpage/startpage.component';

import { AgentprofileComponent } from './c_agentprofile/agentprofile.component';
import  {AgentcomponentComponent} from './c_agentcomponent/agentcomponent.component'

import { MainPageComponent } from './a_main-page/main-page.component';
import { ProfileComponent } from './a_main-page/a_profile/profile.component';
import { ListadminComponent } from './a_main-page/a_listadmin/listadmin.component';
import { RegisterComponent } from './a_main-page/a_register/register.component';
import { a_LoginComponent } from './a_login/login.component';
import { UpdateproComponent } from './a_main-page/a_profile/a_updatepro/updatepro.component';


import { ContactComponent } from './D_customer/D_contact/contact.component';
import { FaqComponent } from './D_customer/faq/faq.component';
import { AboutusComponent } from './D_customer/aboutus/aboutus.component';
import { D_CustomerComponent } from './D_customer/customer.component';
import { D_ProfileComponent } from './D_customer/D_profile/profile.component';
import { TransferComponent } from './D_customer/D_transfer/transfer.component';
import { LoanComponent } from './D_customer/D_loan/loan.component';
import { CheckBalanceComponent } from './D_customer/D_check-balance/check-balance.component';
import { D_LoginComponent } from './D_login/login.component';
import { TransactionhistoryComponent } from './D_customer/D_transactionhistory/transactionhistory.component';


const routes: Routes = [
 { path:'',redirectTo:'startpage',pathMatch:'full'},
 { path:'startpage',component:StartpageComponent},
 { path:'b_login', component:b_LoginComponent },
 { path:'c_login', component:c_LoginComponent },
 { path:'D_login', component:D_LoginComponent },
 { path:'admindashboard', component:AdmindashboardComponent},
 {path:'customer',component:CustomerComponent},
 {path:'agent',component:AgentComponent},
 {path:'agentregistration',component:AgentregistrationComponent},
 {path:'adminupdatecomponent', component:AdminupdatecomponentComponent},
 {path:'c_agentmain',component:AgentmainComponent,canActivate:[AuthGuard]},
 {path:'c_viewcustomer',component:ViewcustomerComponent,canActivate:[AuthGuard]},
 {path:'c_viewtransaction',component:ViewtransactionComponent,canActivate:[AuthGuard]},
 {path:'c_approve-cust',component:ApproveCustComponent,canActivate:[AuthGuard]},
 {path:'c_agentprofile',component:AgentprofileComponent,canActivate:[AuthGuard]},
 {path:'c_agentcomponent',component:AgentcomponentComponent,canActivate:[AuthGuard]},
 {path:'a_main-page',component:MainPageComponent,canActivate:[AuthGuard]},
 {path:'a_profile',component:ProfileComponent,canActivate:[AuthGuard]},
 {path:'a_listadmin',component:ListadminComponent,canActivate:[AuthGuard]},
 {path:'a_register',component:RegisterComponent,canActivate:[AuthGuard]},
 {path:'a_login',component:a_LoginComponent},
 {path:'a_updatepro',component:UpdateproComponent,canActivate:[AuthGuard]},
 {path:'D_customer',component:D_CustomerComponent, canActivate: [AuthGuard]},
 {path:'D_profile',component:D_ProfileComponent,canActivate: [AuthGuard]},
 {path:'loan',component:LoanComponent,canActivate: [AuthGuard]},
 {path:'D_check-balance',component:CheckBalanceComponent,canActivate: [AuthGuard]},
 {path:'D_transfer',component:TransferComponent,canActivate: [AuthGuard]},
 {path:'D_transactionhistory',component:TransactionhistoryComponent,canActivate: [AuthGuard]},
 {path:'D_contact',component:ContactComponent,canActivate: [AuthGuard]},
 {path:'aboutus',component:AboutusComponent,canActivate: [AuthGuard]},
 {path:'faq',component:FaqComponent,canActivate: [AuthGuard]}


 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }