import { TestService } from './../service/test.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './siparis.component.html',
  styleUrls: ['./siparis.component.scss']
})
export class SiparisComponent implements OnInit {

  cars: any[] = [];
  selectedCar: any;
  selectedData: any;

  constructor(private service: TestService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const res = await this.service.get().toPromise();
    console.log(res.data);
    this.cars = res.data;
  }

  clicked(rowData) {
    this.selectedData = rowData;
  }

}
