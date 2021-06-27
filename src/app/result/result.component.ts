import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Advice } from 'src/models/advice';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Result } from 'src/models/result';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public crudService: CrudService) { }

  page!: string;
  
  advice = new Advice('', '', '', '', '');


  ngOnInit(): void {

    if(localStorage.getItem('test result') != null){
      let newResult = localStorage.getItem('test result');
      this.page = newResult!;
      
      if(this.page === 'Depresion') {

        this.advice.videoURL = 'video depresion';
        this.advice.a1 = 'consejo 1';
        this.advice.a2 = 'consejo 2';
        this.advice.a3 = 'consejo 3';

      } else if (this.page === 'Ansiedad') {

        this.advice.videoURL = 'video ansiedad';
        this.advice.a1 = 'consejo 1';
        this.advice.a2 = 'consejo 2';
        this.advice.a3 = 'consejo 3';

      } else if (this.page === 'Feliz') {

        this.advice.videoURL = 'video feliz';
        this.advice.a1 = 'consejo 1';
        this.advice.a2 = 'consejo 2';
        this.advice.a3 = 'consejo 3';

      }

    }

  }

}
