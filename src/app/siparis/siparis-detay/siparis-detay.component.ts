import { Component, OnInit } from '@angular/core';
import { SiparisService } from '../service/siparis.service';
import { SiparisDto } from '../dto/siparis.dto';

@Component({
  selector: 'app-siparis-detay',
  templateUrl: './siparis-detay.component.html',
  styleUrls: ['./siparis-detay.component.scss']
})
export class SiparisDetayComponent implements OnInit {

  list2: any[];
  recs: SiparisDto[] = [];
  constructor(private service: SiparisService) { }

  ngOnInit() {
    this.getDatas();
    this.list2 = [];
    this.onay();
  }

  async getDatas() {
    this.recs = await this.service.get().toPromise();
    console.log(this.recs);
  }

  onay() {
    console.log(this.list2);
  }

}
