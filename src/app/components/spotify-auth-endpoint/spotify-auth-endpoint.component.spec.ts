import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAuthEndpointComponent } from './spotify-auth-endpoint.component';

describe('SpotifyAuthEndpointComponent', () => {
  let component: SpotifyAuthEndpointComponent;
  let fixture: ComponentFixture<SpotifyAuthEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyAuthEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAuthEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
