import { Component, OnInit } from '@angular/core';
import { BakiyeDto } from '../dto/bakiye.dto';
import { BakiyeService } from '../services/bakiye.service';

@Component({
  selector: 'app-bakiye-liste',
  templateUrl: './bakiye-liste.component.html',
  styleUrls: ['./bakiye-liste.component.scss']
})
export class BakiyeListeComponent implements OnInit {

  recs: BakiyeDto[] = [];
  selectedRec: any;
  display: boolean = false;

  constructor(private service: BakiyeService) { }

  ngOnInit() {
    this.getDatas();
  }

  showDialog() {
    this.display = true;
  }

  async getDatas() {
    this.recs = await this.service.get().toPromise();
    console.log(this.recs);
  }
}
