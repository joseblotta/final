import { Component, OnInit } from '@angular/core';
import { PublishBookService } from './publishbook.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'molinajoFinal';

  bookData: Book[];

  constructor(private ldService:PublishBookService){}

  ngOnInit(){
    this.ldData();
  }

  ldData():void{
    this.bookData = this.ldService.ldBook();
  }

}
