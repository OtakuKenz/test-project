import { Component } from '@angular/core';
import { Dog } from '../../Models/Dog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dogs: Dog[] = []

  newDog: string = "";

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dog: [null, Validators.required],
      orderDetailCSV: [null, Validators.required]
    });
  }

  public addDog() {
    let dogName = this.form.value.dog;
    let dog: Dog = {
      name: dogName,
      status: 'listed'
    }

    this.dogs.push(dog)
    console.log(`${dog.name} added`)
  }

  moveToExamining(dog: Dog) {

    dog.status = 'examining'
  }

  moveToFinallyBackToHooman(dog: Dog) {
    dog.status = 'finally_back_to_hooman'
  }
}
