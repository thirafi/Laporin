import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetugasComponent } from './list-petugas.component';

describe('ListPetugasComponent', () => {
  let component: ListPetugasComponent;
  let fixture: ComponentFixture<ListPetugasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPetugasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPetugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
