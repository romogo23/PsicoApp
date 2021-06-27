import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Advice } from 'src/models/advice';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
  }

}
