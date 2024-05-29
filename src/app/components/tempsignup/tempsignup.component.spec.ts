import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsignupComponent } from './tempsignup.component';

describe('TempsignupComponent', () => {
  let component: TempsignupComponent;
  let fixture: ComponentFixture<TempsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempsignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
