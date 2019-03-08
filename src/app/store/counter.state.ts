import { State, Store, StateContext, Action, Selector } from '@ngxs/store';

import { Increment, Decrement, SetTotal } from './counter.actions';

export interface CounterStateModel {
  total: number;
}

@State({
  name: 'counter',
  defaults: {
    total: 0
  }
})
export class CounterState {
  constructor(private store: Store) {}

  @Selector()
  static getTotal(state: CounterStateModel) {
    return state.total;
  }

  @Action(Increment)
  Increment(stateContext: StateContext<any>) {
    const currentTotal = stateContext.getState().total;
    stateContext.patchState({ total: currentTotal + 1 });
  }

  @Action(Decrement)
  Decrement(stateContext: StateContext<any>) {
    const currentTotal = stateContext.getState().total;
    stateContext.patchState({ total: currentTotal - 1 });
  }

  @Action(SetTotal)
  SetTotal(stateContext: StateContext<any>, action: SetTotal) {
    stateContext.patchState({ total: action.number });
  }
}
