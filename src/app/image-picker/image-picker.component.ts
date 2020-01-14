import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType
} from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;

  constructor() {}

  ngOnInit() {}

  clickedme() {
    console.log('clicked me!');
  }
}
