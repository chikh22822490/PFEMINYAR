import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonelleComponent } from './details-personelle.component';

describe('DetailsPersonelleComponent', () => {
  let component: DetailsPersonelleComponent;
  let fixture: ComponentFixture<DetailsPersonelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPersonelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
