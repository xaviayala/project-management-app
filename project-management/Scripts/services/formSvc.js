"use strict";
(function () {
    angular.module("pmApp")
	.factory("pmSvc", ["baseSvc", function (baseService) {

	    var listEndPoint = '/_api/web/lists';

	    var getAll = function () {
	        var query = listEndPoint + "/GetByTitle('Projects')/Items?$select=ID,FirstName,LastName,Address";
	        return baseService.getRequest(query);
	    };

	    var addNew = function (project) {
	        var data = {
	            __metadata: { 'type': 'SP.Data.ProjectsListItem' },
	            FirstName: project.firstName,
	            LastName: project.lastName,
	            Address: project.address
	        };
	        var url = listEndPoint + "/GetByTitle('Projects')/Items";
	        return baseService.postRequest(data, url);
	    };

	    var getById = function (projectId) {
	        var query = listEndPoint + "/GetByTitle('Projects')/GetItemById(" + projectId + ")?$select=ID,FirstName,LastName,Address";
	        return baseService.getRequest(query);
	    };

	    var update = function (project) {
	        var data = {
	            __metadata: { 'type': 'SP.Data.ProjectsListItem' },
	            FirstName: project.firstName,
	            LastName: project.lastName,
	            Address: project.address
	        };
	        var url = listEndPoint + "/GetByTitle('Projects')/GetItemById(" + project.projectId + ")";
	        return baseService.updateRequest(data, url);
	    };

	    var remove = function (projectId) {
	        var url = listEndPoint + "/GetByTitle('Projects')/GetItemById(" + projectId + ")";
	        return baseService.deleteRequest(url);
	    };

	    return {
	        getAll: getAll,
	        addNew: addNew,
	        getById: getById,
	        update: update,
	        remove: remove
	    };
	}]);
})();