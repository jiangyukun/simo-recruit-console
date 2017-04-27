/**
 * Created by jiangyu2016 on 16/10/15.
 */
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'

import allReducers from '../reducers/'
import request_3_phase from '../middleware/request_3_phase'

export default function configureStore(history) {

  const middleware = routerMiddleware(history)
  const store = createStore(allReducers, {}, applyMiddleware(middleware, request_3_phase))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
