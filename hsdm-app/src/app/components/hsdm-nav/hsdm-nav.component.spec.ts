
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsdmNavComponent } from './hsdm-nav.component';

describe('HsdmNavComponent', () => {
  let component: HsdmNavComponent;
  let fixture: ComponentFixture<HsdmNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HsdmNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsdmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
