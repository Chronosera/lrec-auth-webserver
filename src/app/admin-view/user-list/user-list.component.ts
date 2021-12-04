import { Component, Input, Inject, OnInit, SimpleChanges } from '@angular/core';
//import { Users, UserObj } from '../../users';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ConfigService } from '../../app.jsonrouteconnect'
import { Output, EventEmitter } from '@angular/core';
import { machines } from '../../shared/list-of-machines';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {
  @Output() newItemEvent = new EventEmitter<UserObj>();
  @Input() changes: UserObj;
  displayedColumns: string[] = ['select', 'RFID', 'First Name', 'Last Name', 'Program', 'Team Number', 'Admin', 'Machines', 'edit'];
  dataSource: MatTableDataSource<UserObj>;
  selection = new SelectionModel<UserObj>(true, []);
  selectedUsers: UserObj[] = [];
  machineList = machines;

  constructor(private dialog: MatDialog, private http: ConfigService) {
    this.http.getUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }


  updateUser(body, RFID) {
    this.http.updateUser(body, RFID).subscribe((users) => {
      console.log(users);
      this.getUsersRequestAdd();
    });
  }


  //Add a blank user to the Users array
  addUser() {
    //create dummy object with id incremented by 1 and push into the Users array
   

    
    const dialogRef = this.dialog.open(EditModal, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      let newUser: UserObj = {
      RFID: result.RFID,
      FirstName: result.FirstName,
      LastName: result.LastName,
      Program: result.Program,
      TeamNumber: result.TeamNumber,
      Admin: false,
      Machines: [""]

      }
      this.http.addUser(newUser).subscribe((users) => {
        console.log(users);
        this.getUsersRequestAdd();
      });
    });
  }

  //Loop through the selected user list and the userList and then splice the matching users from the Users array
  async deleteUser() {
    //loop through selected users and the userList
    for (let i = this.selection.selected.length - 1; i >= 0; i--) {
         // splice the data in the datasource at the found id
      //TODO ADD DELETE REQUEST
     this.deleteUsersRequest(this.selection.selected[i].RFID)
    }
    this.selection.clear();
  }

  async getUsersRequestDelete() {
    await this.deleteUser();
    this.dataSource.data = this.http.getUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  getUsersRequestAdd() {
    this.dataSource.data = this.http.getUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  deleteUsersRequest(data) {
    this.http.deleteUser(data).subscribe((users) => {
      console.log(users);
    })
  }
  ngOnChanges(change: SimpleChanges) {
    if (this.changes != null) {
      this.updateUser(this.changes, this.changes.RFID);
      this.getUsersRequestAdd();
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //dataSourceRefreshDelete = async () => {
  //  const result = await this.getUsersRequestDelete()
  //}

  //dataSourceRefreshAdd = async () => {
  //  const result = await this.getUsersRequest()
  //}

  getUser

  //emit the selected item to the parent component
  editUser(selectedItem: UserObj) {
    let found = false;
    //add checked checkboxes to the myform array
    if (selectedItem.Machines.length == 0) {

    } else {
      for (let i = 0; i < this.machineList.length; i++) {
        for (let j = 0; j < selectedItem.Machines.length; j++) {
          if (found == false) {
            if (selectedItem.Machines[j].toString() == this.machineList[i].name.toString()) {
              machines[i].checked = true;
              found = true;
            }
            else {
              machines[i].checked = false;
            }
          }
        }
        found = false;
      }
    }
    this.newItemEvent.emit(selectedItem)
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    let numSelected = this.selection.selected.length;
    let numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  ///** The label for the checkbox on the passed row */
  //checkboxLabel(row?: UserObj): string {
  //  if (!row) {
  //    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //  }
  //  console.log(row.RFID)
  //  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.RFID}`;
  //}
}

@Component({
  selector: './user-list-modal.component',
  templateUrl: './user-list-modal.component.html',
})

export class EditModal {
  isAdmin

  constructor(
    public dialogRef: MatDialogRef<EditModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserObj,
    fb: FormBuilder) {
    this.isAdmin = fb.group({
      Admin: false,
    });
  }

  machineList
  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface UserObj {
  RFID: number;
  FirstName: string;
  LastName: string;
  Program: string;
  TeamNumber: number;
  Admin: boolean;
  Machines: Array<string>;
}
