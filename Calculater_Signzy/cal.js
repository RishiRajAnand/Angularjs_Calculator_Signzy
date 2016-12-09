var myApp = angular.module('myApp',[]);

function MyCtrl($scope) {
 $scope.output = "0";
$scope.record=[];
 $scope.updateOutput = function(btn) {
 if($scope.output == "0") {
 $scope.output = btn;
 } else {
 $scope.output += String(btn);
 }
 };

 $scope.operate = function(op) {
 
 $scope.output += op;

 
 };

 $scope.equal = function() {

 $scope.output = eval($scope.output);
     $scope.record.push($scope.output);

 };
 
}
myApp.controller('MyCtrl', MyCtrl);