<template>
    <div class="test">
        <div ref="top" class="top"></div>
        <div class="content">
            <div
                class="item"
                v-for="(item, index) in list"
                :key="item.id"
                :style="item.circleStyle"
            >
                <span>{{ item.circle }}</span>
            </div>
        </div>
        <div class="index">
            <div id="stars">
                <div class="star" style="top: 0px;left: 500px;"></div>
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
                let item = this.createStar(600 - 100, 0 + 100, 50);
                arr[i].circle = item;
            }
            //console.log(arr,'@');
            for (var k = 0; k < arr.length; k++) {
                this.init2(arr[k], arr);
            }
        },
        init2(obj, arr) {
            //console.log(arr,'#');
            let isOk = 0;
            for (var j = 0; j < arr.length; j++) {
                if (obj.id == arr[j].id) {
                    continue;
                } else {
                    if (this.jiance(arr[j], obj)) {
                        arr[j].circle = this.createStar(600 - 100, 0 + 100, 50);
                        //this.init2(arr);
                        isOk++;
                        continue;
                    }
                }
            }
            if ((isOk = 0)) {
                //console.log(arr,'!');
                for (var n = 0; n < arr.length; n++) {
                    arr[n].circleStyle = {
                        width: arr[n].circle.r * 2 + "px",
                        height: arr[n].circle.r * 2 + "px",
                        backgroundColor: this.randomColor(),
                        left: arr[n].circle.x + "px",
                        top: arr[n].circle.y + "px"
                    };
                }
            } else {
                this.init2(obj, arr);
            }

            this.list = arr;
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
        },
        cc(x, y) {
            /* http://www.jq22.com/webqd5115?from=groupmessage */
            var stars = document.getElementById("stars");
            let _self = this;
            // js随机生成流星
            for (var j = 0; j < 20; j++) {
                var newStar = document.createElement("div");
                newStar.className = "star";
                let top = this.randomDistance(1500, -100);
                let left = this.randomDistance(1980, 300);
                newStar.style.top = top + "px";
                newStar.style.left = left + "px";
                stars.appendChild(newStar);
            }

            var star = document.getElementsByClassName("star");

            // 给流星添加动画延时
            for (let i = 0, len = star.length; i < len; i++) {
                let disX = parseInt(star[i].offsetLeft) - x;
                let disY = parseInt(star[i].offsetTop) - y;
                let dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
                let top = parseInt(star[i].offsetTop) ;
                let left = parseInt(star[i].offsetLeft);
                let speed=1000;
                let timer = setInterval(() => {
                    top-=10;
                    left-=10;
                    speed-=500;
                    if(left<=x){
                        left=x;
                    }
                    if(top<=y){
                        top=y;
                    }
                    if(speed<=100){
                        speed=100;
                    }
                    star[i].style.top = top + "px";
                    star[i].style.left = left + "px";
                    if(left==x&&top==y){
                        clearInterval(timer);
                        star[i].style.display='none';
                    }
                }, speed);
                star[i].style.animationDelay =
                    i % 6 == 0 ? "0s" : i * 0.8 + "s";
            }
        },
        // 封装随机数方法
        randomDistance(max, min) {
            var distance = Math.floor(Math.random() * (max - min + 1) + min);
            return distance;
        }
    },
    mounted() {
        //this.init();
        this.cc(300, 300);
    }
};
</script>
<style lang="scss">
.test {
    height: 100%;

    .content {
        position: relative;
        width: 600px;
        height: 600px;
        background-color: #000;
        margin: 0 auto;
        .item {
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            word-break: break-all;
            span {
                display: block;
                padding-top: 50px;
            }
        }
    }
}
.index {
    position: fixed;
    width: 100%;
    background: #000000;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
}
#stars {
    width: 100%;
    position: relative;
    height: 100%;
}
.star {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    transform-origin: 100% 0;
    animation: star-ani 4s linear infinite;
    -webkit-animation: star-ani 5s linear infinite;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
    opacity: 0;
    z-index: 2;
}
.star:after {
    content: "";
    display: block;
    top: 0px;
    left: 4px;
    border: 0px solid #fff;
    border-width: 0px 90px 2px 90px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
    transform: rotate(-45deg) translate3d(1px, 3px, 0);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
    transform-origin: 0% 100%;
}
@keyframes star-ani {
    0% {
        opacity: 0;
        transform: scale(0) /* translate3d(0, 0, 0) */;
    }
    20% {
        opacity: 0.8;
        transform: scale(0.2) /* translate3d(-100px, 100px, 0) */;
    }
    40% {
        opacity: 0.8;
        transform: scale(0.4) /* translate3d(-200px, 200px, 0) */;
    }
    60% {
        opacity: 0.8;
        transform: scale(0.6) /* translate3d(-300px, 300px, 0) */;
    }
    80% {
        opacity: 1;
        transform: scale(1) /* translate3d(-350px, 350px, 0) */;
    }
    100% {
        opacity: 1;
        transform: scale(1.2) /* translate3d(-400px, 380px, 0) */;
    }
}
</style>
