import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoDetailsComponent } from './afiliado-details.component';

describe('AfiliadoDetailsComponent', () => {
  let component: AfiliadoDetailsComponent;
  let fixture: ComponentFixture<AfiliadoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfiliadoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
