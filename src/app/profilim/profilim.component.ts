import { Component, OnInit } from '@angular/core';
import { ProfilimDto } from './dto/profilim.dto';
import { ProfilimService } from './services/profilim.services';


@Component({
  selector: 'app-profilim',
  templateUrl: './profilim.component.html',
  styleUrls: ['./profilim.component.scss']
})
export class ProfilimComponent implements OnInit {

  rec: ProfilimDto;
  display: boolean = false;
  isDisabled = true;


  constructor(private service: ProfilimService) { }

  ngOnInit() {

    this.getDatas();
  }

  showDialog() {
    this.display = true;
  }

  async getDatas() {
    this.rec = await this.service.get().toPromise();
    console.log(this.rec);
  }


}

