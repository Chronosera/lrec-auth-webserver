import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { UserObj, Users } from '../../login-view/users';
import { machines } from '../../shared/list-of-machines';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {
  @Input() item: UserObj;

  myform: FormGroup;

  updatedUser: UserObj;
  machineList = machines;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {

    this.myform = this.fb.group({
      id: new FormControl,
      rfid: new FormControl,
      username: new FormControl,
      password: new FormControl,
      isAdmin: new FormControl,
      selectedMachines: this.fb.array([])
    });


    this.myform.patchValue({
      id: this.item.id,
      rfid: this.item.rfid,
      username: this.item.username,
      password: this.item.password,
      isAdmin: this.item.isAdmin,

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
      id: this.item.id,
      rfid: this.item.rfid,
      username: this.item.username,
      password: this.item.password,
      isAdmin: this.item.isAdmin,
      selectedMachines: this.item.machines
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
    const newUser = new UserObj(this.myform.value.id, this.myform.value.rfid ,this.myform.value.username, this.myform.value.password, this.myform.value.isAdmin, this.myform.controls.selectedMachines.value)

    //Loop through the users to find the id that matches this submitted users id
    for (let i = 0; i < Users.length; i++) {
      if (this.item.id == Users[i].id) {
        //set the user at [i] to be the new user.
        Users[i] = newUser;
      }
    }
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
