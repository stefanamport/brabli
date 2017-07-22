import Vue from 'vue'

export default {
	Vue.filter('reverse', function(value) {
	  // slice to make a copy of array, then reverse the copy
	  return value.slice().reverse();
	});
}