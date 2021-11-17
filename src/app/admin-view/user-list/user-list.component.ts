import { Component, OnInit } from '@angular/core';
import { Users, UserObj } from '../../login-view/users';
import { Output, EventEmitter } from '@angular/core';
import { machines } from '../../shared/list-of-machines';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<UserObj>();
  userList = Users;
  selectedUsers: UserObj[] = [];
  newmax = -1;
  machineList = machines;
  
  constructor() {

  }
  ngOnInit() {

  }

  //Add a blank user to the Users array
  addUser() {
    console.log('clicked');
    // lopp throught he user list
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].id > this.newmax) {
        //set new max as the highest id in the list
        this.newmax = Users[i].id;
      }
    }
    //create dummy object with id incremented by 1 and push into the Users array
    const newUser = new UserObj(this.newmax+1,0,'NewUser', 'NewPassword', false, Array(""));
    Users.push(newUser);
  }

  //Loop through the selected user list and the userList and then splice the matching users from the Users array
  deleteUser() {
    for (let i = this.selectedUsers.length - 1; i >= 0; i--) {
      for (let j = this.userList.length - 1; j >= 0; j--) {
        if (this.selectedUsers[i].id == Users[j].id) {
          Users.splice(j, 1);
        }
      }
    }
  }

  /**
   * Grab all of the users selected and add them to a selected users array to be used later for deletion
   * If the checkbox is not checked (the user just unchecked the checkbox) then remove the user from the list
   * @param event used to check if a checkbox is checked.
   * @param selectedItem the user object that was selected
   */
  sendUser(event, selectedItem: UserObj) {
    console.log(selectedItem.id);
    console.log(event.target.checked)
    //if the checkbox is checked
    if (event.target.checked) {
      console.log(selectedItem);
      //add the selected item to the selected users list
      this.selectedUsers.push(selectedItem);
    }
    // otherwise checkbox was just unchecked and remove the selected user from the list.
    else {
      for (let i = 0; i < this.selectedUsers.length; i++) {
        if (selectedItem.id == this.selectedUsers[i].id) {
          this.selectedUsers.splice(i, 1)
        }
      }
    }
  }

  //emit the selected item to the parent component
  editUser(selectedItem: UserObj) {
    let found = false;
    //add checked checkboxes to the myform array
    for (let i = 0; i < this.machineList.length; i++) {
      for (let j = 0; j < selectedItem.machines.length; j++) {
        if (found == false) {
          if (selectedItem.machines[j].toString() == this.machineList[i].name.toString()) {
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
    this.newItemEvent.emit(selectedItem)
  }
}
