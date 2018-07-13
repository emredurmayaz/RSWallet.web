import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisDetayComponent } from './siparis-detay.component';

describe('SiparisDetayComponent', () => {
  let component: SiparisDetayComponent;
  let fixture: ComponentFixture<SiparisDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiparisDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiparisDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
