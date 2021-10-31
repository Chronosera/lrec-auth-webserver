import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Users {
  RFID: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  program: string;
  teamNumber: string;
  useFabA: boolean;
  useFabB: boolean;
  useFabC: boolean;
  useFabD: boolean;
  useFabE: boolean;
}

const TEMP_USER_DATA: Users[] = [
  { RFID: 123, firstName: "Jackson", lastName: "Merrick", isAdmin: true, program: "CS", teamNumber: "TeamNumba 1", useFabA: true, useFabB: true, useFabC: true, useFabD: true, useFabE: true },
  { RFID: 321, firstName: "Test", lastName: "User", isAdmin: false, program: "ECON", teamNumber: "TeamNumba 2", useFabA: true, useFabB: true, useFabC: false, useFabD: false, useFabE: false },
  { RFID: 111, firstName: "Ian", lastName: "Klien", isAdmin: true, program: "CS", teamNumber: "TeamNumba 1", useFabA: true, useFabB: true, useFabC: true, useFabD: true, useFabE: true },
  { RFID: 333, firstName: "Dom", lastName: "Torreto", isAdmin: false, program: "FAF", teamNumber: "Family", useFabA: true, useFabB: false, useFabC: false, useFabD: false, useFabE: true },
  { RFID: 222, firstName: "Robert", lastName: "The Bruce", isAdmin: false, program: "CNIT", teamNumber: "Scotland", useFabA: true, useFabB: true, useFabC: true, useFabD: false, useFabE: true },
];

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})

export class UserListComponent {
  displayedColumns: string[] = ['RFID', 'firstName', 'lastName', 'isAdmin', 'program', 'teamNumber', 'useFabA', 'useFabB', 'useFabC', 'useFabD', 'useFabE'];
  dataSource = new MatTableDataSource(TEMP_USER_DATA);
  selectedRow = new Set<Users>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
