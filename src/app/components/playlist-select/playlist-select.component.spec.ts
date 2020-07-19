import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSelectComponent } from './playlist-select.component';

describe('PlaylistSelectComponent', () => {
  let component: PlaylistSelectComponent;
  let fixture: ComponentFixture<PlaylistSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
