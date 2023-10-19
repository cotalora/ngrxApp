import { Component, inject } from '@angular/core';
import { AppState } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-right-landscape',
  templateUrl: './right-landscape.component.html',
  styleUrls: ['./right-landscape.component.scss']
})
export class RightLandscapeComponent {
  
  private _store: Store<AppState> = inject(Store<AppState>);

  ngOnInit(): void {
    this.colorObservable().subscribe(enable => {
      document.documentElement.style.setProperty('--third-color', enable ? '128, 213, 52' : '25, 139, 2');
    })
  }

  private colorObservable(): Observable<boolean> {
    return this._store.select('color').pipe(
      map(({ enable }) => enable)
    );
  }
}
