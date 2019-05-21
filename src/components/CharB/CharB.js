import echarts from 'echarts';
import { a, b } from './option';



export default {
    name: 'CharB',
    props: {},
    data() {
        return {
            chart1: null,
            chart2: null,
            id1: this.$getRandom(10),
            id2: this.$getRandom(10),
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            window.onresize = () => {
                if (this.chart1 && this.chart2) {
                    this.chart1.resize();
                    this.chart2.resize();
                }
            }
        },
        init1() {
            this.chart1 = echarts.init(document.getElementById(this.id1));
            this.chart1.setOption(a);
        },
        init2() {
            this.chart2 = echarts.init(document.getElementById(this.id2));
            this.chart2.setOption(b);
        },
        // 用于更新一些数据
        update() { },
    },
    // 计算属性
    computed: {
    },
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init1();
        this.init2();
        this.$nextTick(() => {
            this.init();
        });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};