<template>
  	<div>
    	<div class="your_scores_container">
            <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover">分享出去</div>
        <div class="share_code">
            <header class="share_header">给自己方向，找些爱好充实自己的生活。</header>

        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <div>
               循着你自己的路，勇敢的前进吧，即使前方满是荆棘，要有捷径的话也是可以走一走的。。。
            </div>
            <i class="iconfont icon-icon-guanbi"></i>
        </div>

  	</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: 'score',
    data(){
        return {
            showHide: false, //是否显示提示
            score: 0, //分数
            scoreTips:'', //分数提示
            rightAnswer: [1, 5, 12, 15, 18], //正确答案
            scoreTipsArr:['0还是20，你值得傲娇！','40！你已不惑？sure？','60，你很皮，及格了！','80！80！大锤80！','100！厉害了，看着对勾点，不对都难！'],
        }
    },
    computed: mapState(['answerid']),
	created(){
        this.computedScore();
        this.getScoreTip();
        document.body.style.backgroundImage = 'url(./static/img/42.jpg)';
    },
    methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //是否显示分享提示
        showCover: function (){
            this.showHide = !this.showHide;
        },
        //根据分数显示提示
        getScoreTip: function (){
            if(this.score <= 20) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 40) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score <= 60) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
        }
    },
}

</script>

<style lang="less">
    body{
        background-image: url(../../../static/img/42.jpg);
        padding-top: 1.2rem;
         background-size:cover;
    }
    .your_scores_container{
        width: 9.7rem;
        height: 9.1rem;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;


            top: 0;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #fff;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: #fff;
            font-size: 0.8rem;
            text-align: center;
            background: linear-gradient(-86deg, #EEF85B 5%, #7AEC8D 53%, #09E5C3 91%);
             -webkit-background-clip: text;
             -webkit-text-fill-color: #fff;
             -webkit-text-stroke: 6px transparent;

        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 1rem auto 0;
        color: #ef0f0f;
        font-family:STCaiyun;
        font-style: italic;
        -webkit-text-fill-color: transparent; -webkit-text-stroke: 0.1rem #fff;
    }
    .share_code{
        width: 5.3rem;
        margin: 8rem 0 0 8rem;
        .share_header{
            color: #664718;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            font-weight: 500;
        }

    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        color:#fff;
        div{
            padding: 3rem 2rem;
        }
        i{
            font-size:1rem;
            color:#fff;
        }
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
