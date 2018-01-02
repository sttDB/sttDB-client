import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterproUploadComponent } from './interpro-upload.component';

describe('InterproUploadComponent', () => {
  let component: InterproUploadComponent;
  let fixture: ComponentFixture<InterproUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterproUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterproUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
