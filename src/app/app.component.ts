import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Increment, Decrement, SetTotal } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CounterStateModel, CounterState } from './store/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Reads the name of the state from the parameter
  //@Select()
  //counter$: Observable<CounterStateModel>;

  // Reads the name of the state from the state class
  //@Select(CounterState)
  //counter$: Observable<CounterStateModel>;

  // Uses the getTotal memoized selector to only return total
  //@Select(CounterState.getTotal)
  //counter$: Observable<number>;

  // Also accepts a function like our select method
  @Select(state => state.counter)
  counter$: Observable<CounterStateModel>;

  ngOnInit(): void {
    this.reset();
  }

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new SetTotal(0));
  }
}
