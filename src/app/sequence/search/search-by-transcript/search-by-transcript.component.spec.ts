import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTranscriptComponent } from './search-by-transcript.component';

describe('SearchByTranscriptComponent', () => {
  let component: SearchByTranscriptComponent;
  let fixture: ComponentFixture<SearchByTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
