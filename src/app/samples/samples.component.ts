import { Component, OnInit } from '@angular/core';

import { samples } from '../samples';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent {
  samples = samples;

  download() {
    window.alert('Das samplepack wurde heruntergeladen.');
  }
}