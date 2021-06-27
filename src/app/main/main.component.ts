import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Advice } from 'src/models/advice';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
  }

}
