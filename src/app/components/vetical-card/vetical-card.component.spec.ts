import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeticalCardComponent } from './vetical-card.component';

describe('VeticalCardComponent', () => {
  let component: VeticalCardComponent;
  let fixture: ComponentFixture<VeticalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeticalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
