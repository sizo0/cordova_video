app.controller('Root', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        //var myScroll = new IScroll("#wrapper");
		changeSize($("#home"));
		$("#field,#history,#challenges,#developement,#cera").click(function(e){
			//e.preventDefault();
			console.log(e.currentTarget);
		})
    });
});