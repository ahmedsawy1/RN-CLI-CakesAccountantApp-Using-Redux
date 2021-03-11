import {
  EMPTY_PROFITS,
  MAKE_NUMBER_CAKE,
  MAKE_ONE_CAKE,
  SELL_NUMBER_CAKES,
  SELL_ONE_CAKE,
} from './types';

export const sellOneCake = (id) => ({
  type: SELL_ONE_CAKE,
  payload: id,
});

export const makeOneCake = (id) => ({
  type: MAKE_ONE_CAKE,
  payload: id,
});

export const sellNumCake = (id, number) => ({
  type: SELL_NUMBER_CAKES,
  payload: id,
  number,
});

export const makeNumCake = (id, number) => ({
  type: MAKE_NUMBER_CAKE,
  payload: id,
  number,
});

export const emptyProfits = () => ({
  type: EMPTY_PROFITS,
});
