import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.scss']
})
export class DirectivesAssignmentComponent implements OnInit {
  showPara = false;
  btnClicked: any = [];
  i = 0
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.btnClicked.push(this.i + 1)
    this.i++;

    if (this.showPara) {
      this.showPara = false
    }
    else
      this.showPara = true;
  }

}
