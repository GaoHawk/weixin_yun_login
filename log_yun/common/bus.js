import Vue from 'vue'
import login from '../src/components/Login.vue';

var bus = new Vue();

bus.$on('clearState',target => {

});

export default bus;