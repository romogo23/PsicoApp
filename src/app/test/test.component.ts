import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Result } from 'src/models/result';
import { Advice } from 'src/models/advice';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { Test } from 'src/models/test';
import { Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  newResult = new Result('', '', '');

  isSubmitted = false;

  test = new Test('Me siento cansado/a', 'Me es dificil relajarme o sentirme tranquilo/a', 'Mi corazón se acelera y respiro rápidamente');
  
  result!: Result;

  formTemplate = new FormGroup({
    answer1: new FormControl('', Validators.required),
    answer2: new FormControl('', Validators.required),
    answer3: new FormControl('', Validators.required)
  });

  constructor(public crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    
  }

  getResult(formValue: any): void {

    this.newResult = formValue;

    //console.log("Q1: " + this.newResult.answer1 + " " + "Q2: " + this.newResult.answer2 + " " + "Q3: " + this.newResult.answer3)

    if(this.newResult.answer1 === 'Si' && this.newResult.answer2 == 'Si' && this.newResult.answer3 === 'Si') {
        localStorage.setItem('test result', 'Depresion');
    } else if (this.newResult.answer1 === 'No' && this.newResult.answer2 == 'No' && this.newResult.answer3 === 'No') {
        localStorage.setItem('test result', 'Feliz');
    } else if (this.newResult.answer1 === 'Si' && this.newResult.answer2 == 'No' && this.newResult.answer3 === 'No') {
        localStorage.setItem('test result', 'Ansiedad');
    } else if (this.newResult.answer1 === 'Si' && this.newResult.answer2 == 'Si' && this.newResult.answer3 === 'No') {
        localStorage.setItem('test result', 'Ansiedad');
    } else if (this.newResult.answer1 === 'No' && this.newResult.answer2 == 'Si' && this.newResult.answer3 === 'No') {
        localStorage.setItem('test result', 'Feliz');
    } else if (this.newResult.answer1 === 'No' && this.newResult.answer2 == 'No' && this.newResult.answer3 === 'Si') {
        localStorage.setItem('test result', 'Depresion');
    } else if (this.newResult.answer1 === 'No' && this.newResult.answer2 == 'Si' && this.newResult.answer3 === 'Si') {
        localStorage.setItem('test result', 'Depresion');
    } else if (this.newResult.answer1 === 'Si' && this.newResult.answer2 == 'No' && this.newResult.answer3 === 'Si') {
        localStorage.setItem('test result', 'Depresion');
    }

    this.router.navigateByUrl('/result');
    this.resetForm();
  }
 
  get formControls(): any {
    const controls = 'controls';
    return this.formTemplate[controls];
  }
 
  resetForm(): void {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      answer1: '',
      answer2: '',
      answer3: ''
    });
  }

}
