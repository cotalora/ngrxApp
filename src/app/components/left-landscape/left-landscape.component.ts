import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/interfaces';

@Component({
  selector: 'app-left-landscape',
  templateUrl: './left-landscape.component.html',
  styleUrls: ['./left-landscape.component.scss']
})
export class LeftLandscapeComponent {
  
  private _store: Store<AppState> = inject(Store<AppState>);

  ngOnInit(): void {
    this.colorObservable().subscribe(enable => {
      document.documentElement.style.setProperty('--secondary-color', enable ? '92, 0, 270' : '139, 120, 225');
    })
  }

  private colorObservable(): Observable<boolean> {
    return this._store.select('color').pipe(
      map(({ enable }) => enable)
    );
  }
}
