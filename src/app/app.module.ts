import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    StudentListComponent,
    AddStudentComponent,
    ProductListComponent,
    ProductOneComponent,
    ClientComponent,
    AdminComponent,
    AboutUsComponent,
    ContactComponent,
    Page404Component,
    AddproductComponent,
    EditProductComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
