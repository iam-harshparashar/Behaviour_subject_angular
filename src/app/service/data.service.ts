import { Injectable } from '@angular/core';
import { Subject , Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject =new BehaviorSubject<any>(null);
  public data: any =[];
  constructor() { }
  //addFormData(data: any) {
   // this.subject.next(data);

  addFormData(data: any) {
    console.log(data);
    
    this.subject.next(data);
  }

  sendData(): Observable<any>{
    return this.subject.asObservable();
  }
}

