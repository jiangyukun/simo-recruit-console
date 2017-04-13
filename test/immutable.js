/**
 * Created by jiangyukun on 2017/4/13.
 */
import {fromJS} from 'immutable'

const obj = {a: 2}

let a1 = fromJS(obj)
let a2 = fromJS(obj)

let a3 = a1.set('a', 2)


console.log(a1 == a2)
console.log(a1 == a3)
console.log(a1.toJS() == a1.toJS())
