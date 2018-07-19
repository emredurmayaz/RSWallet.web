import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'test-detail',
    templateUrl: './test-detail.component.html',
    styles: [`
    .red {
        color: red;
    }
    `]
})
export class TestDetailComponent implements OnInit {

    @Input() data: any;

    ngModelTest: any;

    constructor() { }

    ngOnInit() {
        console.log(this.data)
    }

    clicked() {
        console.log(this.data.brand);
    }

}
