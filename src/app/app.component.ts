import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './interfaces';
import { enableAnotherColor } from './store/actions/color.actions';
import { distinctUntilChanged, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _store: Store<AppState> = inject(Store<AppState>);

  public title = 'landscapeNgrx';
  public enable: Observable<boolean> = of(false);
  
  ngOnInit(): void {
    this.enable = this._store.select('color').pipe(
      distinctUntilChanged(),
      map(({ enable }) => enable)
    )
  }

  public onEnableAnotherColor() {
    this._store.dispatch(enableAnotherColor());
  }
  
}
