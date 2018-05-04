export default {
	//点击进入下一题
	addTimeNum (state, num) {
		state.itemNum += num;
	},
	//记录答案
	remberAnswer (state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	remberTime (state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	initializeData (state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
}


