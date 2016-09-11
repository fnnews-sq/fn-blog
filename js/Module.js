/**
 * Created by Thinkpad on 2016/7/11.
 */
var myApp=angular.module("myApp",[]);

myApp.controller("firstController",["$scope","headernav","cssdirectory","javascriptdirectory","angulardirectory","nodedirectory",function($scope,headernav,cssdirectory,javascriptdirectory,angulardirectory,nodedirectory){
    $scope.headernavdata=headernav;
    $scope.directory = cssdirectory;
    $scope.changeDirectory=function(obj){
        switch (obj) {
            case "css" :
                $scope.directory = cssdirectory;
                break;
            case "js":
                $scope.directory = javascriptdirectory;
                break;
            case "angular":
                $scope.directory = angulardirectory;
                break;
            case "node":
                $scope.directory = nodedirectory;
                break;
            case "onlinetext":
                window.location.href="http://www.w3school.com.cn/tiy/t.asp"
                break;
        };
    };
    $scope.toggle=function(obj){
        if(angular.element(obj.target).children("i").hasClass("fa-caret-down")){
            angular.element(obj.target).children("i").removeClass("fa-caret-down").addClass("fa-caret-right");
        }else{
            angular.element(obj.target).children("i").removeClass("fa-caret-right").addClass("fa-caret-down");
        }
    }
}]);

