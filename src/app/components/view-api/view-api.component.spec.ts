import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApiComponent } from './view-api.component';

describe('ViewApiComponent', () => {
  let component: ViewApiComponent;
  let fixture: ComponentFixture<ViewApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
