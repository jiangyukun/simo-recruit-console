/**
 * Created by jiangyu2016 on 16/10/15.
 */
import {createStore, applyMiddleware} from 'redux'
import request_3_phase from '../middleware/request_3_phase'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import allReducers from '../reducers/'

export default function configureStore(history) {

  const middleware = routerMiddleware(history)
  const store = createStore(allReducers, {}, applyMiddleware(request_3_phase, middleware))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
