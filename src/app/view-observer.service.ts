import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewObserverService {

  subjectNotifier: Subject<null> = new Subject<null>();

  constructor() { }

  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }
}
