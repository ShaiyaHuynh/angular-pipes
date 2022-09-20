import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormatUserPipe } from './Pipes/format-user.pipe';
import { FilterUserPipe } from './Pipes/filter-user.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FormatUserPipe, FilterUserPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
