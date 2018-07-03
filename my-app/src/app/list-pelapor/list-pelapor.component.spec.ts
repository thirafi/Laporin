import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPelaporComponent } from './list-pelapor.component';

describe('ListPelaporComponent', () => {
  let component: ListPelaporComponent;
  let fixture: ComponentFixture<ListPelaporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPelaporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPelaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
