import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './section2/binding/binding.component';
import { DirectivesAssignmentComponent } from './section2/directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
