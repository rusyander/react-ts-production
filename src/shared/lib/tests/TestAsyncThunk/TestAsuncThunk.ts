import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
  }
>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreater: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreater: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreater = actionCreater;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreater(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
