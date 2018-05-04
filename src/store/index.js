import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';  
// * 表示将 './actions'模块中的所有接口挂载到actions对象上  as 表示别名的意思
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';

// 若要用对象风格的提交方式则无法使用mutations.js 必须在本页内些mutations
import * as types from './mutation-types'

console.log(mutations)
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  
  mutations:{
  	[types.ADD_ITEMNUM] (state, num) {
		state.itemNum += num;
	},
	[types.REMBER_ANSWER] (state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[types.REMBER_TIME] (state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[types.INITIALIZE_DATA] (state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
  }
})
export default store;

