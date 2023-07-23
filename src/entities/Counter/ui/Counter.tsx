import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  // const counter = useSelector(getCounterValue);
  const counter = useCounterValue();
  const { dicrement: decr, increment: inc } = useCounterActions();

  const increment = () => {
    // dispatch(CounterActions.increment());
    decr();
  };
  const dicrement = () => {
    // dispatch(CounterActions.dicrement());
    inc();
  };
  return (
    <div>
      <h1 data-testid="counter-title">Counter {counter}</h1>
      <Button data-testid="increment" onClick={increment}>
        increment
      </Button>
      <Button data-testid="dicrement" onClick={dicrement}>
        dicrement
      </Button>
    </div>
  );
};
