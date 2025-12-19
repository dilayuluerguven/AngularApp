import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangesHookComponent } from './ng-onchanges-hook.component';

describe('NgOnchangesHookComponent', () => {
  let component: NgOnchangesHookComponent;
  let fixture: ComponentFixture<NgOnchangesHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangesHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnchangesHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
