import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PayrollReportComponent } from './payroll-report/payroll-report.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrollReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
