// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css';

import 'element-ui/lib/theme-chalk/display.css';
import { Icon, Card } from 'element-ui';
Vue.use(Icon);
Vue.use(Card);
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

Vue.config.productionTip = false
import '../static/css/bg.css';
import '../static/css/media.css';
import './components/var.scss';

import MyFooter from './components/common/MyFooter'
Vue.component('MyFooter',MyFooter);

import MyNav from './components/common/MyNav'
Vue.component('MyNav',MyNav);

import MyTitle from './components/common/MyTitle'
Vue.component('MyTitle',MyTitle);

import MySubNav from './components/common/MySubNav'
Vue.component('MySubNav',MySubNav);

import Breadcrumb from './components/common/Breadcrumb'
Vue.component('Breadcrumb',Breadcrumb);

import MySubTitle from './components/common/MySubTitle'
Vue.component('MySubTitle',MySubTitle);

import ToTop from './components/common/ToTop'
Vue.component('ToTop',ToTop);

import ImgText from './components/common/ImgText'
Vue.component('ImgText',ImgText);

import LR from './components/common/LR'
Vue.component('LR',LR);

import MbModal from './components/common/MbModal'
Vue.component('MbModal',MbModal);

import Swiper from './components/common/Swiper'
Vue.component('Swiper',Swiper);

//designWidth:设计稿的实际宽度值，需要根据实际设置
//maxWidth:制作稿的最大宽度值，需要根据实际设置
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
;(function(designWidth, maxWidth) {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})(750, 1200);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


