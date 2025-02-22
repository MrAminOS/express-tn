import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsComponent } from './parcels.component';

describe('ParcelsComponent', () => {
  let component: ParcelsComponent;
  let fixture: ComponentFixture<ParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
