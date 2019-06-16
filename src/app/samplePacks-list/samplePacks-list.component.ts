import { Component, OnInit } from '@angular/core';

import { samplePacks } from '../samplePacks';
import { SamplePacksService } from '../generated/services';

@Component({
  selector: 'app-samplePacks-list',
  templateUrl: './samplePacks-list.component.html',
  styleUrls: ['./samplePacks-list.component.css']
})
export class SamplePackListComponent implements OnInit {
  samplePacks = samplePacks;

  constructor(
    private samplePacksService: SamplePacksService,
    ){
    }    
  ngOnInit(){
    this.samplePacksService.SamplePacksGetAll().subscribe(data => this.samplePacks = data);
  }
  download() {
    window.alert('Das samplepack wurde heruntergeladen.');
  }
}

