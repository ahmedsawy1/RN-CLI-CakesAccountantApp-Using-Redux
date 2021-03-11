import {
  MAKE_ONE_CAKE,
  SELL_ONE_CAKE,
  MAKE_NUMBER_CAKE,
  SELL_NUMBER_CAKES,
  EMPTY_PROFITS,
} from './types';

const initialState = {
  cost: 0,
  grossProfit: 0,
  netProfits: 0,

  cakes: [
    {
      id: 1,
      title: 'Classic Cake',
      price: 20,
      qty: 5,
      cost: 15,
      image: require('../assets/cakes/strawberry.png'),
    },
    {
      id: 2,
      title: 'Chocolate Cake',
      price: 30,
      qty: 10,
      cost: 28,
      image: require('../assets/cakes/classic.png'),
    },
    {
      id: 3,
      title: 'Strawberry Cake',
      price: 40,
      qty: 40,
      cost: 30,
      image: require('../assets/cakes/chocolate.png'),
    },
    {
      id: 4,
      title: 'White Cake',
      price: 70,
      qty: 5,
      cost: 65,
      image: require('../assets/cakes/whiteCake.png'),
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ONE_CAKE:
      const modifiedCakes = [...state.cakes];
      modifiedCakes[action.payload].qty += 1;
      return {
        ...state,
        cakes: modifiedCakes,
        cost: state.cost + state.cakes[action.payload].cost,
      };

    case SELL_ONE_CAKE:
      const soldCake = [...state.cakes];
      if (state.cakes[action.payload].qty > 0) {
        soldCake[action.payload].qty -= 1;

        return {
          ...state,
          cakes: soldCake,
          grossProfit: state.grossProfit + state.cakes[action.payload].price,
        };
      } else {
        return {...state};
      }

    case MAKE_NUMBER_CAKE:
      const newCakes = [...state.cakes];
      newCakes[action.payload].qty += +action.number;
      return {
        ...state,
        cakes: newCakes,
        cost: state.cost + state.cakes[action.payload].cost * action.number,
      };

    case SELL_NUMBER_CAKES:
      if (state.cakes[action.payload].qty >= action.number) {
        const newSoldCakes = [...state.cakes];
        newSoldCakes[action.payload].qty -= +action.number;

        return {
          ...state,
          cakes: newSoldCakes,
          grossProfit:
            state.grossProfit +
            state.cakes[action.payload].price * action.number,
        };
      }

    case EMPTY_PROFITS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
