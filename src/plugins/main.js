import Vue from 'vue';
import './config.js';
import './url.js';
import Http from './Http.js';
import './components.js';
import './Origin.js';
import './directive.js';


/**开启饿了么 */

import ElementUI from 'element-ui';
import '../styles/element-variables.scss'
Vue.use(ElementUI, {
    size: 'mini'
});



/**开启muse */




/**开启vant */




import '@/styles/styles.scss';

Vue.prototype.$http = Http;



