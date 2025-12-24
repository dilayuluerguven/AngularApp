import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaComponent } from './exa.component';

describe('ExaComponent', () => {
  let component: ExaComponent;
  let fixture: ComponentFixture<ExaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
