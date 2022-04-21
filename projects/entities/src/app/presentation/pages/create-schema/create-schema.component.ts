import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IItem } from 'angular-components-library/dropdown-item';
import { of } from 'rxjs';

@Component({
  selector: 'app-create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['./create-schema.component.scss'],
})
export class CreateSchemaComponent implements OnInit {
  static route = 'create-schema';

  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup({
      collection: new FormControl(''),
      type: new FormControl(''),
      module: new FormControl('entity'),
      presentation: new FormControl(''),
      display: new FormControl({ icon: '' }),
      repr: new FormControl([]),
      definition: new FormControl({}),
    });
  }

  dataFunction(){
    return of([
      {
        display: 'jlad',
        value: 465
      }
    ] as IItem[])
  }

  ngOnInit(): void {}
}
