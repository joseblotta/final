import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKDATA } from '../assets/data/bookData'

@Injectable({
  providedIn: 'root'
})
export class PublishBookService {
  
  constructor() { }

  ldBook(): Book[] {
      const BOOKDATA:Book[] = [
      {author:"Bob",
      country:"Canada",
      category:"Terror"    
      },
      {author:"Mark",
      country:"USA",
      category:"Romance"    
      },
      {author:"Ralph",
      country:"Brasil",
      category:"Cience"    
      }]
      return BOOKDATA;
    }

}
