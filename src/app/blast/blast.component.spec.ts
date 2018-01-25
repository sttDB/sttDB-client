import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastComponent } from './blast.component';

describe('BlastComponent', () => {
  let component: BlastComponent;
  let fixture: ComponentFixture<BlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
