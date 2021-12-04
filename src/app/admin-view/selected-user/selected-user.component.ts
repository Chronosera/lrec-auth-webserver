import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { UserObj, Users } from '../../users';
import { machines } from '../../shared/list-of-machines';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {
  @Input() item: UserObj;
  @Output() changes = new EventEmitter<UserObj>();
  myform: FormGroup;

  updatedUser: UserObj;
  machineList = machines;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {

    this.myform = this.fb.group({
      RFID: new FormControl,
      FirstName: new FormControl,
      LastName: new FormControl,
      Program: new FormControl,
      TeamNumber: new FormControl,
      Admin: new FormControl,
      Machines: this.fb.array([])
    });

    this.myform.patchValue({
      RFID: this.item.RFID,
      FirstName: this.item.FirstName,
      LastName: this.item.LastName,
      Program: this.item.Program,
      TeamNumber: this.item.TeamNumber,
      Admin: this.item.Admin,
    })

    for (let i = 0; i < this.machineList.length; i++) {
      if (machines[i].checked == true) {
        const machineArray = <FormArray>this.myform.controls.selectedMachines;
        machineArray.push(new FormControl(machines[i].name));
      }
    }
  }

  /**
   * On change of the @input variable, set the new form values to that of the new item selected
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    //Clear the machine array
    const machineArray = <FormArray>this.myform.controls.selectedMachines;
    machineArray.clear();

    //Patch in the new item values
    this.myform.patchValue({
      RFID: this.item.RFID,
      FirstName: this.item.FirstName,
      LastName: this.item.LastName,
      Program: this.item.Program,
      TeamNumber: this.item.TeamNumber,
      Admin: this.item.Admin,
      Machines: this.item.Machines
    })
    //Set the new machine values
    for (let i = 0; i < this.machineList.length; i++) {
      if (machines[i].checked == true) {
        const machineArray = <FormArray>this.myform.controls.selectedMachines;
        machineArray.push(new FormControl(machines[i].name));
      }
    }

  }

/**
 * Add items or remove items form the machine array depending on if its checked or not
 * @param name name of the machine checekd
 * @param event even of checked or not for the checkbox
 */
  onChange(name: string, event) {
    const machineArray = <FormArray>this.myform.controls.selectedMachines;
    if (event.target.checked) {
      machineArray.push(new FormControl(name));
    }
    else
    {
      let index = machineArray.controls.findIndex(x => x.value == name)
      machineArray.removeAt(index);
    }
  }

  /**
   * Submit the form data to the user array based on the user id
   */
  onSubmit() {
    //Create new user object based off of the forms values
    const newUser = new UserObj(this.myform.value.RFID, this.myform.value.FirstName ,this.myform.value.LastName, this.myform.value.Program, this.myform.value.TeamNumber,this.myform.value.Admin, this.myform.controls.Machines.value)

    //Loop through the users to find the id that matches this submitted users id
    //for (let i = 0; i < Users.length; i++) {
    //  if (this.item.RFID == Users[i].RFID) {
    //    //set the user at [i] to be the new user.
    //    Users[i] = newUser;
    //  }
    //}
    this.changes.emit(newUser)
    //Reset the form
    this.myform.reset()
  }

  /**
   * Change the forms value based on if the admin checkbox is on or not.
   * @param event event to see if the checkbox is checked or not
   */
  changeAdminValue(event) {
    //if the checkbox is checked
    if (event.target.checked) {
      //patch the form value to be true
      this.myform.patchValue({
        isAdmin: true,
      })
    }
    //if the checkbox is not checked
    else {
      //patch the form value to be false
      this.myform.patchValue({
        isAdmin: false
      })
    }
  }
}
