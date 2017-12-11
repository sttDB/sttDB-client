import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastaUploadComponent } from './fasta-upload.component';

describe('FastaUploadComponent', () => {
  let component: FastaUploadComponent;
  let fixture: ComponentFixture<FastaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
