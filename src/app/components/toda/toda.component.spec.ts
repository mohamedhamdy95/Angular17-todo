import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaComponent } from './toda.component';

describe('TodaComponent', () => {
  let component: TodaComponent;
  let fixture: ComponentFixture<TodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
