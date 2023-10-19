import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { AppState } from 'src/app/interfaces';

@Component({
  selector: 'app-center-landscape',
  templateUrl: './center-landscape.component.html',
  styleUrls: ['./center-landscape.component.scss']
})
export class CenterLandscapeComponent implements OnInit {
  
  private _store: Store<AppState> = inject(Store<AppState>);

  ngOnInit(): void {
    this.colorObservable().subscribe(enable => {
      document.documentElement.style.setProperty('--principal-color', enable ? '252, 51, 115' : '4, 57, 89');
    })
  }

  private colorObservable(): Observable<boolean> {
    return this._store.select('color').pipe(
      map(({ enable }) => enable)
    );
  }
}
