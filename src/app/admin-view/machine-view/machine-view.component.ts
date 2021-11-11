import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-view',
  templateUrl: './machine-view.component.html',
  styleUrls: ['./machine-view.component.css']
})
export class MachineViewComponent implements OnInit {
  isAdmin = true;
  constructor() { }

  ngOnInit(): void {
  }

}
