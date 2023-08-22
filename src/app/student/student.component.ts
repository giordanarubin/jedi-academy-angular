import { Component, OnInit, Input  } from '@angular/core';

import {Student} from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  @Input() student = <Student>{}

  constructor(){}

  clicked(){
    console.log(`Student: ${this.student.name}`)
  }
}
