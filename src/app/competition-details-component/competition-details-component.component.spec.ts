import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailsComponentComponent } from './competition-details-component.component';

describe('CompetitionDetailsComponentComponent', () => {
  let component: CompetitionDetailsComponentComponent;
  let fixture: ComponentFixture<CompetitionDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
