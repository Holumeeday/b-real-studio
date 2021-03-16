import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GghomeComponent } from './gghome.component';

describe('GghomeComponent', () => {
  let component: GghomeComponent;
  let fixture: ComponentFixture<GghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
