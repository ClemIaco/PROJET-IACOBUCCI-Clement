import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireRoutingModule } from './formulaire-routing.module';
import { NamePatternDirective } from '../../directives/name-pattern.directive';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { MatchPasswordDirective } from '../../directives/match-password.directive';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PostalCodePatternDirective } from '../../directives/postal-code-pattern.directive';
import { CityPatternDirective } from '../../directives/city-pattern.directive';
import { EmailPatternDirective } from '../../directives/email-pattern.directive';
import { CountryPatternDirective } from '../../directives/country-pattern.directive';
import { FormulaireComponent } from './component/formulaire.component';
import { RecapitulatifComponent } from '../recapitulatif/component/recapitulatif.component';
import { ApiService } from '../../shared/services/api.service';


@NgModule({
  declarations: [
    NamePatternDirective,
    PasswordPatternDirective,
    MatchPasswordDirective,
    PhonePipePipe,
    PostalCodePatternDirective,
    CityPatternDirective,
    EmailPatternDirective,
    FormulaireComponent,
    RecapitulatifComponent,
    CountryPatternDirective],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormulaireRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class FormulaireModule { }
