import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Advice } from 'src/models/advice';
import { Image } from 'src/models/image';
import { Video } from 'src/models/video';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  audio = new Audio('assets/sounds/prueba.mp3');

  opc = true;

  images: Array<Image> = [];

  image!: Observable<Image | undefined>;

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.reproducir();
    this.getImages();
    this.getImageOnInit();
  }

  getImages() {
    this.crudService.getImages().subscribe( (images) => {
      this.images = images 
    });
  }

  getImageOnInit() {
    this.image = this.crudService.getImageById("Q9aY337M7ku3FJuQtXVG");
    console.log(this.image);
  }

  reproducir() {
    this.audio.play();
  }

  parar() {
    this.audio.pause();
  }
}
