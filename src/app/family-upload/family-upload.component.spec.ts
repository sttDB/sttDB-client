import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyUploadComponent } from './family-upload.component';

describe('FamilyUploadComponent', () => {
  let component: FamilyUploadComponent;
  let fixture: ComponentFixture<FamilyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
