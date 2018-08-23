import { createStore } from 'redux';
/**
 * 这是一个reducer，形式为（state，action)=>state的纯函数
 * 描述了action如何把state转变成下一个state
 * state的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是Immutable.js生成的数据结构。唯一的要点是
 * 当state变化时需要返回全新的对象，而不是修改传入的参数
 * 下面例子使用`switch`语句和字符串来做判断，但你可以写帮助类（helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counter(state = 0, action){
    switch(action.type){
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
    }
}
//创建Redux store来存放应用的状态
//API是{ subscribe, dispatch, getState }
let store = createStore(counter);

store.subscribe(() =>
    console.log(store.getState())
)

//改变内部state唯一方法是dispatch一个action
//action可以被序列化，用日记记录和储存下来，后期还可以回放的方式执行
store.dispatch({ type:'INCREMENT' });
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
