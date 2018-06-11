import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUploadComponent } from './go-upload.component';

describe('GoUploadComponent', () => {
  let component: GoUploadComponent;
  let fixture: ComponentFixture<GoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
