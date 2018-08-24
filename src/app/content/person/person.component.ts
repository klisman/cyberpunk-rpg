import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../service/person.service';
import {Person} from '../../model/person';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {

  form: FormArray;
  persons: Array<Person>;
  creating = false;

  constructor(private personService: PersonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.persons = this.personService.listar();
    this.createForm();
    this.form.valueChanges.subscribe(value => {console.log(value);});
  }

  save() {

  }

  createForm() {
    this.form = this.fb.array([]);
    this.loadPersonForm();
  }

  createPersonFormGroup(id, name, age): FormGroup {
    return this.fb.group({
      id: new FormControl(id, Validators.required),
      name: new FormControl(name, Validators.required),
      age: new FormControl(age, Validators.required)
    });
  }

  loadPersonForm() {
    this.persons.forEach(p => {
      const personForm = this.createPersonFormGroup(p.id, p.name, p.age);
      this.form.push(personForm);
    });
  }

  getId(rowIndex) {
      return this.form.at(rowIndex).get('id').value;
  }

  setId(event, index) {
    this.form.at(index).get('id').setValue(event.srcElement.value);
  }

  getName(rowindex) {
    return this.form.at(rowindex).get('name').value;
  }

  setName(event, index) {
    this.form.at(index).get('name').setValue(event.srcElement.value);
  }
}
