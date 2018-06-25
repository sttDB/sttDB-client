import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeggUploadComponent } from './kegg-upload.component';

describe('KeggUploadComponent', () => {
  let component: KeggUploadComponent;
  let fixture: ComponentFixture<KeggUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeggUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeggUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
