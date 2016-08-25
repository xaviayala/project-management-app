"use strict";
(function () {
    angular
        .module("pmApp")
        .controller("pmCtrl", pmCtrl);

    pmCtrl.$inject = ["$scope", "pmSvc", "$routeParams", "$route", "$location"];

    function pmCtrl($scope, pmSvc, $routeParams, $route, $location) {

        /**
         * Method for class initialization
         * @return {[type]} [description]
         */
        $scope.init = function () {
            if ($routeParams.projectId) {
                pmSvc.getById($routeParams.projectId)
                    .then(function (response) {
                        $scope.project = {
                            projectId: response.d.ID,
                            firstName: response.d.FirstName,
                            lastName: response.d.LastName,
                            address: response.d.Address
                        };

                    });
            }

            pmSvc.getAll()
                .then(function (response) {
                    $scope.project = response.d.results;
                });

            $scope.reset();
            //  Calling routeParam method
            if ($route.current.method !== undefined) {
                $scope[$route.current.method]();
            }
        }

        /**
         * Reset the form values
         */
        $scope.reset = function () {
            $scope.project = [{
                firstName: '',
                lastName: '',
                address: ''
            }];
        };


        $scope.save = function (project) {

            if (typeof project.projectId != 'undefined') {
                pmSvc.update(project)
                    .then(function (response) {
                        $location.path("/");
                    });

            } else {
                pmSvc.addNew(project)
                    .then(function (response) {
                        $location.path("/");
                    });
            }
        };

        /**
         * [delete description]
         * @param  {Integer} index        [description]
         * @param  {Boolean} confirmation [description]
         * @return {Boolean}              [description]
         */
        $scope.delete = function (project, confirmation) {

            confirmation = (typeof confirmation !== 'undefined') ? confirmation : true;
            if (confirmDelete(confirmation)) {
                var message,
                    item = projectSvc.remove(project.ID);
                if (!!item) {
                    message = 'Contact "' + project.FirstName + '" with id "' + project.ID + '" was removed of your contact\'s list';
                    alertService.add('success', message, 5000);

                    var projectIndex = $scope.project.indexOf(project);
                    $scope.project.splice(projectIndex, 1);

                    return true;
                }

                alertService.add('error', 'Houston, we have a problem. This operation cannot be executed correctly.', 5000);
                return false;
            }
        };

        /**
          * Method for access "window.confirm" function
          * @param  {Boolean} confirmation [description]
          * @return {Boolean}              [description]
          */
        var confirmDelete = function (confirmation) {
            return confirmation ? confirm('This action is irreversible. Do you want to delete this contact?') : true;
        };


        $scope.init();
    }

})();
