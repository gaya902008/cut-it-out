import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [],
    imports: [CommonModule,
    MatFormFieldModule],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
