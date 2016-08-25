"use strict";
(function () {
    angular
        .module("pmApp")
        .controller("formCtrl", formCtrl);

    formCtrl.$inject = ["$scope","$translate"];

    function formCtrl($scope, $translate) {

        //set app language
        $scope.changeLanguage = function(key) {
          $translate.use(key);
        }

        // we will store all of our form data in this object
        $scope.formData = {};
        $scope.formData.personalDetails = [{}];


        $scope.addNew = function(personalDetail){
            $scope.formData.personalDetails.push({ 
                'fname': "", 
                'lname': "",
                'email': "",
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.formData.personalDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.formData.personalDetails = newDataList;
        };
    
        $scope.checkAll = function () {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.formData.personalDetails, function(personalDetail) {
                personalDetail.selected = $scope.selectedAll;
            });
        };    

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };
    }
})();
