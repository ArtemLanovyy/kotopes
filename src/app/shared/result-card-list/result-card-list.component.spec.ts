import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardListComponent } from './result-card-list.component';

describe('ResultCardListComponent', () => {
  let component: ResultCardListComponent;
  let fixture: ComponentFixture<ResultCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
