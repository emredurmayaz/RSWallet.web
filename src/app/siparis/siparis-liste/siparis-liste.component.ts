import { Component, OnInit } from '@angular/core';
import { SiparisDto } from '../dto/siparis.dto';
import { SiparisService } from '../service/siparis.service';

@Component({
  selector: 'app-siparis-liste',
  templateUrl: './siparis-liste.component.html',
  styleUrls: ['./siparis-liste.component.scss']
})
export class SiparisListeComponent implements OnInit {

  recs: SiparisDto[] = [];
  selecetedItem: any;
  display = false;

  constructor(private service: SiparisService) { }

  ngOnInit() {
    this.getDatas();
  }
  async getDatas() {
    this.recs = await this.service.get().toPromise();
    console.log(this.recs);
  }
  showDialog() {
    this.display = true;
  }
}
