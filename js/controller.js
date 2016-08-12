var app = angular.module("myApp", ["ngTouch"]);

app.controller("homeCtrl", function($scope, $http) {
	$http.get("../json/home.json").success(function(res) {
		$scope.data = res.data;
		setTimeout($scope.lunbo,500);
	});
	$scope.lunbo = function(){
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				autoplay: 2000, //可选选项，自动滑动
				autoplayDisableOnInteraction: false //触摸过后继续轮播
			});
			return mySwiper;
		}
	//	$scope.touchStart = function(){
	////		console.log("aaa");
	//		
	//	};
	
	//获取数据
	$http.get("../json/home2.json").success(function(res){
		$scope.data1 = res.data;
	})

})