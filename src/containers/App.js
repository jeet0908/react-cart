import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import cart from '../reducers/cart'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import CartContainer from './CartContainer';
import  '../css/common.css'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducers = combineReducers({
  cart,
});
const initialState = {
  cart: [
    {
      id: 1,
      name: 'TC 2016 Red SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 74.00,
      count: 11,
      size : {20:'small', 30:'medium', 40:'large', 50:'x-large'},
      sizeVal : 30,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
    }, {
      id: 2,
      name: 'TC 2016 Dark SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 35.99,
      count: 13,
      size : {20:'small', 30:'medium', 40:'large', 50:'x-large'},
      sizeVal : 20,
    img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
    }, {
      id: 3,
      name: 'Goat Shorts',
      description: 'This just in... VC\'s NEW signature \'GOAT\' style athletic shorts now with pockets! Made with our FlexLight material.',
      price: 29.00,
      count: 4,
      size : {20:'small', 30:'medium', 40:'large', 50:'x-large'},
      sizeVal : 30,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/MedGreyPockets_front_grande400x600_grande_888f95c1-0f4d-483f-938e-c686892a855a_grande.jpg?v=1454966549',
    }, {
      id: 4,
      name: 'Friction Gloves',
      description: 'This is the glove that started it all! Friction Gloves work great in every condition: dry, hot, rain, snow, you name it. They will help you maintain a firm grip on the disc whether you\'re catching or throwing. They eliminate slippage when the disc is wet, keep your hands warm in cold weather, and ease the sting of zippy throws. Whether your goal is to throw with more accuracy, catch tough discs, or just look fly, Frictions will help.  Frictions are not bulky or stiff like other gloves. They are tight fitting and, after a while, you\'ll forget they\'re even on!',
      price: 33.95,
      count: 18,
      size : {20:'small', 30:'medium', 40:'large', 50:'x-large'},
      sizeVal : 50,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
    }
  ],
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
)


const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={CartContainer}/>
     </Router>
  </Provider>
)

export default App