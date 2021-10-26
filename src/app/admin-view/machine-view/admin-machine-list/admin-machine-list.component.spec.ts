import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMachineListComponent } from './admin-machine-list.component';

describe('MachineListComponent', () => {
  let component: AdminMachineListComponent;
  let fixture: ComponentFixture<AdminMachineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMachineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
