import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBySequenceComponent } from './search-by-sequence.component';

describe('SearchBySequenceComponent', () => {
  let component: SearchBySequenceComponent;
  let fixture: ComponentFixture<SearchBySequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBySequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBySequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
