import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTrinityIdComponent } from './search-by-trinity-id.component';

describe('SearchByTrinityIdComponent', () => {
  let component: SearchByTrinityIdComponent;
  let fixture: ComponentFixture<SearchByTrinityIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTrinityIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTrinityIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
