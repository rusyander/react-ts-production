import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);
  const increment = () => {
    dispatch(CounterActions.increment());
  };
  const dicrement = () => {
    dispatch(CounterActions.dicrement());
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
