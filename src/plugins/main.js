import Vue from 'vue';
import './config.js';
import './url.js';
import Http from './Http.js';
import './components.js';
import './Origin.js';
import './directive.js';
import ElementUI from 'element-ui';
import '../styles/element-variables.scss'

Vue.use(ElementUI, {
    // size: 'small'
});
import '@/styles/styles.scss';

Vue.prototype.$http = Http;



