angular.module('app', [])
    .controller('HeaderController', ['$scope', function HeaderController($scope) {
        $scope.appDetails = {
			title: "BooKart",
			tagline: "We have 1 million books for you"
		};
}]);