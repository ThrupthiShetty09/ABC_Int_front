import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { b_LoginComponent } from './b_login/login.component';
import { c_LoginComponent } from './c_login/login.component';
import { AdmindashboardComponent } from './b_admindashboard/admindashboard.component';
import {CustomerComponent} from './b_customer/customer.component';
import { ViewcustomerComponent } from './c_viewcustomer/viewcustomer.component';

import { AgentComponent } from './b_agent/agent.component';
import { AgentregistrationComponent } from './b_agentregistration/agentregistration.component';
import {AgGridModule} from "@ag-grid-community/angular";
import { HttpClientModule } from '@angular/common/http';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
/*import { ReactiveFormsModule } from '@angular/forms';*/
import { AgentserviceService } from './b_agent/agentservice.service';
import { CustomerserviceService } from './b_customer/customerservice.service';
import { AgentregistrationserviceService } from './b_agentregistration/agentregistrationservice.service';
import { LoginserviceService } from './b_login/loginservice.service';
import { AdminupdatecomponentComponent } from './b_adminupdatecomponent/adminupdatecomponent.component';
import { AdminupdateserviceService } from './b_adminupdatecomponent/adminupdateservice.service';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { AgentmainComponent } from './c_agentmain/agentmain.component';
import {ViewtransactionComponent} from './c_viewtransaction/viewtransaction.component'
import { ApproveCustComponent } from './c_approve-cust/approve-cust.component';
import { AgentprofileComponent } from './c_agentprofile/agentprofile.component';
import  {AgentcomponentComponent} from './c_agentcomponent/agentcomponent.component';
import { MainPageComponent } from './a_main-page/main-page.component';
import { ProfileComponent } from './a_main-page/a_profile/profile.component';
import { ListadminComponent } from './a_main-page/a_listadmin/listadmin.component';
import { RegisterComponent } from './a_main-page/a_register/register.component';
import { a_LoginComponent } from './a_login/login.component';
import { UpdateproComponent } from './a_main-page/a_profile/a_updatepro/updatepro.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ToolbarService } from '@syncfusion/ej2-angular-grids';

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

const appRoutes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    b_LoginComponent,
    c_LoginComponent,
    AdmindashboardComponent,
    CustomerComponent,
    AgentComponent,
    AgentregistrationComponent,
    AdminupdatecomponentComponent,
    StartpageComponent,
    AgentmainComponent,
    ViewcustomerComponent,
    ViewtransactionComponent,
    ApproveCustComponent,
    AgentprofileComponent,
    AgentcomponentComponent,
    MainPageComponent,
    ProfileComponent,
    ListadminComponent,
    RegisterComponent,
    a_LoginComponent,
    UpdateproComponent,
    D_CustomerComponent,
    D_ProfileComponent,
    TransferComponent,
    LoanComponent,
    CheckBalanceComponent,
    D_LoginComponent,
    TransactionhistoryComponent,
    ContactComponent,
    FaqComponent,
    AboutusComponent

   // NewregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [AuthGuard,PageService, SortService, FilterService, GroupService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
