import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryCardComponent } from './countries/country-card/country-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    FilterMenuComponent,
    CountriesComponent,
    CountryCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
