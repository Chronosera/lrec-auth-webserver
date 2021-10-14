import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMachineComponent } from './selected-machine.component';

describe('SelectedMachineComponent', () => {
  let component: SelectedMachineComponent;
  let fixture: ComponentFixture<SelectedMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
