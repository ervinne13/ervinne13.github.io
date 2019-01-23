import './assets/inspinia/css/bootstrap.min.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/inspinia/css/style.css';

import './assets/inspinia/js/jquery-2.1.1.js';
import './assets/inspinia/js/bootstrap.min.js';

import './assets/inspinia/js/plugins/metisMenu/jquery.metisMenu.js';
import './assets/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js';

import './assets/inspinia/js/inspinia.js';

import './assets/inspinia/js/plugins/pace/pace.min.js';
import './assets/inspinia/js/plugins/sparkline/jquery.sparkline.min.js';

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
