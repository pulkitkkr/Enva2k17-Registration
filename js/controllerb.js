  var config = {
    apiKey: "AIzaSyDswmlurteMFo-r4VWmmRasLB8lluwUr4A",
    authDomain: "enva-2017.firebaseapp.com",
    databaseURL: "https://enva-2017.firebaseio.com",
    storageBucket: "enva-2017.appspot.com",
    messagingSenderId: "614609718503"
  };
  firebase.initializeApp(config);

angular.module('PrakritiView')
.controller('MainForm',  function($firebaseObject,$firebaseArray ){
		var context = this;
		context.Events = [
		{Name:'Minute To Win', Team:true},
		{Name:'GreenOvation', Team:true},
		{Name:'Comedy Show',Team:true},
		{Name:'Rajneeti', Team:true},
		{Name:'Food Event', Team:false},
		{Name:'Board Game', Team:true},
		{Name:'Series Quiz', Team:true, TeamSize: 2},
		{Name:'Mystery Room', Team:true},
		{Name:'Treasure Hunt',Team:true},
		{Name:'Traditional Funkiest Walk',Team:true},
		{Name:'Arm Wrestling', Team:false},
		{Name:'Ad Mad', Team:true},
		{Name:'Mind Grind', Team:false},
		{Name:'Street Play', Team: true}
	];

	})