import Vue from 'vue'

// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
    data() {
        return {
            config: {
                tabNavList: localStorage['tabNavList'],
                tabNavActiveName: localStorage['tabNavActiveName'],
            }
        }
    },
    methods: {
        initConfig() {
            for (let x in this.config) {
                this.config[x] = localStorage[x]
            }
        },
        initConfigLocal() {
            for (let x in this.config) {
                localStorage[x] = this.config[x];
            }
        },
        setConfig(key, value) {
            localStorage[key] = value;
            this.initConfig();
        }
    },
    watch: {
        config: {
            handler() {
                this.initConfigLocal();
            },
            deep: true,
        }
    }
})



