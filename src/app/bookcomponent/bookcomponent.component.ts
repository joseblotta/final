import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {
  @Input() bookInfo;
  display:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  buttonClick(){
    this.display = !this.display;
    console.log("Click");
  }
}
