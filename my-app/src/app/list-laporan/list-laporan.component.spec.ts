import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaporanComponent } from './list-laporan.component';

describe('ListLaporanComponent', () => {
  let component: ListLaporanComponent;
  let fixture: ComponentFixture<ListLaporanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLaporanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
