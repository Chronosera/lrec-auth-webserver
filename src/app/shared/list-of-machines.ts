export interface Machine {
  id: number,
  name: string;
  checked: boolean;
}

//export class UserObj {
//  constructor(
//    public id: number,
//    public username: string,
//    public password: string,
//    public isAdmin: boolean,
//    public machines: Array<string>
//  ) { }
//}

export const machines: Machine[] = [
  {
    id: 1,
    name: 'CNC Mill',
    checked: false
  },
  {
    id: 2,
    name: 'CNC Lathe',
    checked: false
  },
  {
    id: 3,
    name: 'Plasma Cutter',
    checked: false
  },
  {
    id: 4,
    name: 'Vinyl Cutter',
    checked: false
  },
  {
    id: 5,
    name: 'CNC Router',
    checked: false
  },
  {
    id: 6,
    name: 'Laser Cutter',
    checked: false
  },
  {
    id: 7,
    name: 'Mini Mill',
    checked: false
  },
  {
    id: 8,
    name: 'Vertical Bandsaw',
    checked: false
  },
  {
    id: 9,
    name: 'Miter Box',
    checked: false
  },
  {
    id: 10,
    name: 'Drill Press',
    checked: false
  },
  {
    id: 11,
    name: 'Grinder/Sander',
    checked: false
  },
  {
    id: 12,
    name: 'Robot Field',
    checked: false
  },
];
