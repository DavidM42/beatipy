import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsaverItemsComponent } from './beatsaver-items.component';

describe('BeatsaverItemsComponent', () => {
  let component: BeatsaverItemsComponent;
  let fixture: ComponentFixture<BeatsaverItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsaverItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsaverItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
