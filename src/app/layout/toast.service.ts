import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Message} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  INIT_STATE ="INIT"


  private send$ = new BehaviorSubject<Message>({summary:this.INIT_STATE});
  senSub=this.send$.asObservable()
   public send(message: Message) {
    this.send$.next(message);
   }
}
