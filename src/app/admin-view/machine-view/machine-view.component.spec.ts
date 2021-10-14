import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineViewComponent } from './machine-view.component';

describe('MachineViewComponent', () => {
  let component: MachineViewComponent;
  let fixture: ComponentFixture<MachineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
