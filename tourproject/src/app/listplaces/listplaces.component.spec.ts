import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplacesComponent } from './listplaces.component';

describe('ListplacesComponent', () => {
  let component: ListplacesComponent;
  let fixture: ComponentFixture<ListplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
