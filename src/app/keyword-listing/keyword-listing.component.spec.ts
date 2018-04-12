import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordListingComponent } from './keyword-listing.component';

describe('KeywordListingComponent', () => {
  let component: KeywordListingComponent;
  let fixture: ComponentFixture<KeywordListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
