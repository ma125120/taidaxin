import newData from './new.js'
import num from './num.js'
import product from './product.js'
import examine from './examine.js'

import about from './about/index.js'

import products from './products/index.js'

import schedule from './schedule/index.js'

import career from './career/index.js'

import wisdom from './wisdom/index.js'

import composite from './composite/index.js'

var data ={
	nav:[{
		text:'首页',
		url:'/'
	},{
		text:'新高考',
		url: '/examine',
		children: [
			{
				text: '走班排课',
				url:'/schedule'
			},{
				text: '职业生涯规划',
				url:'/career'
			},{
				text: '综合素质评价',
				url:'/composite'
			}
		]
	},{
		text: '产品中心',
		url:'/product'
	},{
		text: '关于我们',
		url:'/about'
	}],
	info:{
		name:'山西泰达鑫科技有限公司',
		tel1: '0315-8066660',
		tel2: '0351-8332580',
		address: '山西省太原市小店区中心街万立大厦3楼'
	},
	newData,
	num,
	product,
	examine,

	about,

	products,

	schedule,

	career,

	wisdom,

	composite
};
export default data;