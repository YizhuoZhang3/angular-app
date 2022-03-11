import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  showSecrete = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecrete = !this.showSecrete;
    this.log.push(this.log.length + 1);
  }

}
