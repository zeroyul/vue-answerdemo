<template>
  	<section>
    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">题{{itemNum}}</span>
    	</header>
    	<div v-if="fatherComponent == 'home'" >
    		<div class="home_logo item_container_style">椿去湫来，海棠花开</div>
    		<router-link to="item" class="start button_style" >开始</router-link>
    	</div>
    	<div v-if="fatherComponent == 'item'" >
    		<div class=" item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    					</li>
    				</ul>
    			</div>
    		</div>
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length">下一题</span>
    		<span class="submit_item button_style" v-else @click="submitAnswer">提交</span>
    	</div>
  	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'itemcontainer',
	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
  	props:['fatherComponent'],
  	computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
	]),
  	methods: {
  		...mapActions([
  			'addNum', 'initializeData',
  		]),
  		//点击下一题
  		nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
  		//索引0-3对应答案A-B
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//选中的答案信息
	  	choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			clearInterval(this.timer)
	  			this.$router.push('score')
  			}else{
  				alert('不选答案不让你继续走下去！')
  			}
	  	},
	},
	created(){
		//初始化信息
		this.initializeData();
        console.log('new begin')
		document.body.style.backgroundImage = 'url(./static/img/44.jpg)';
	}
}
</script>

<style lang="less">
    @color-normal:#3bafda;
    @color-btn:#0850f9;
    @color-question:#f9087a;
    @color-word:#000;
    @color-chosen:#ff3300;
    @color-submit:#fff;
    body{
        background-size:cover;
    }

	.top_tips{
		position: absolute;
		height: 4.35rem;
        width:10rem;
		top: -1.3rem;
		left: 1.6rem;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			font-size: 0.8rem;
			font-family: '黑体';
			font-weight: 600;
			color: @color-normal;
			text-align: center;
		}
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}
	.home_logo{

		background-size: 13.142rem 100%;
		background-position: right center;
	}

	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        text-decoration: none;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        text-align:center;
        border:1px solid @color-btn;
        line-height:2.1rem;
        border-radius:0.3rem;
        color:@color-btn;
	}
    .start{
        margin-top:2rem;
    }
    .next_item{
    	border-color:@color-question ;
        color:@color-question;
    }
    .submit_item{
    	border-color:@color-submit;
        color:@color-submit;
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 1.5rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: @color-word;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.8rem;
            font-weight:bold;
			color: @color-word;
			vertical-align: middle;
		}
		.option_style{
			height: 0.925rem;
			width: 0.925rem;
			border: 1px solid @color-word;
			border-radius: 50%;
			line-height: 0.925rem;
			text-align: center;

			font-size: 0.7rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: @color-chosen;
			color: #fff;
			border-color: @color-chosen;
		}
		.option_detail{
			width: 7.5rem;

		}
	}
</style>
