<template>
    <div class="test">
        <div ref="top" class="top"></div>
        <div class="content">
            <div class="item" v-for="(item,index) in list" :key="item.id" :style="item.circleStyle">
                <span>{{item.circle}}</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: "test",
    data() {
        return {
            list: [
                {
                    id: 1,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 2,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 3,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 4,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 5,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 6,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 7,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 8,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 9,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 10,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                },
                {
                    id: 11,
                    value: 111,
                    circleStyle: {},
                    circleR: 200,
                    circle: {}
                }
            ]
        };
    },
    methods: {
        init() {
            let arr = JSON.parse(JSON.stringify(this.list));
            for (var i = 0; i < arr.length; i++) {
                let item = this.createStar(600 - 100, 0 + 100,50);
                arr[i].circle = item;
            }
            //console.log(arr,'@');
            for(var k=0;k<arr.length;k++){
                this.init2(arr[k],arr);
            }
            
        },
        init2(obj,arr) {
            //console.log(arr,'#');
            let isOk=0;
            for (var j = 0; j < arr.length; j++) {
                if(obj.id==arr[j].id){
                    continue;
                }
                else{
                    if (this.jiance(arr[j], obj)) {
                    arr[j].circle = this.createStar(600 - 100, 0 + 100,50);
                        //this.init2(arr);
                        isOk++;
                        continue;
                    }
                }
            }
            if(isOk=0){
                //console.log(arr,'!');
                for(var n=0;n<arr.length;n++){
                    arr[n].circleStyle={'width':arr[n].circle.r*2+'px','height':arr[n].circle.r*2+'px','backgroundColor':this.randomColor(),'left':arr[n].circle.x+'px','top':arr[n].circle.y+'px'};
                }
            }
            else{
                this.init2(obj,arr);
            }
            
            this.list=arr;
            console.log(this.list);
        },
        createStar(m, n, r) {
            let x = Math.round(Math.random() * (m - n) + n);
            let y = Math.round(Math.random() * (m - n) + n);
            return { x, y, r };
        },
        randomColor() {
            return (
                "rgba(" +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                1 +
                ")"
            ); //make different color
        },
        /* 碰撞检测 */
        callTest(obj1, obj2) {
            var l1 = obj1.offsetLeft;
            var t1 = obj1.offsetTop;
            var r1 = obj1.offsetLeft + obj1.offsetWidth;
            var b1 = obj1.offsetTop + obj1.offsetHeight;
            var l2 = obj2.offsetLeft;
            var t2 = obj2.offsetTop;
            var r2 = obj2.offsetLeft + obj2.offsetWidth;
            var b2 = obj2.offsetTop + obj2.offsetHeight;
            if (r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2) {
                return false;
            } else {
                return true;
            }
        },
        jiance(item1, item2) {
            let x = Math.abs(item1.circle.x - item2.circle.x);
            let y = Math.abs(item1.circle.y - item2.circle.y);
            let dis = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            if (dis <= item1.circle.r + item2.circle.r) {
                return true;
            } else {
                return false;
            }
        }
    },
    mounted() {
        this.init();
    }
};
</script>
<style lang="scss">
.test {
    height: 100%;
    
    .content{
        position: relative;
        width: 600px;
        height: 600px;
        background-color: #000;
        margin: 0 auto;
        .item{
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            word-break: break-all;
            span{
                display:block;
                padding-top: 50px;
            }
        }
    }
}
</style>
