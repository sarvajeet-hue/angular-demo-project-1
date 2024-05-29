import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;

  getCount(){
    return this.count;
  }

  increamentCount(){
    this.count = this.count + 1;
  }
  decreamentCount(){
    this.count = this.count - 1;
  }

}
