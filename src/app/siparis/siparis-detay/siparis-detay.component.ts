import { Component, OnInit } from '@angular/core';
import { SiparisDto } from '../dto/siparis.dto';

@Component({
  selector: 'app-siparis-detay',
  templateUrl: './siparis-detay.component.html',
  styleUrls: ['./siparis-detay.component.scss']
})
export class SiparisDetayComponent implements OnInit {

  rec: SiparisDto;

  constructor() { }

  ngOnInit() {
  }

}
