angular.module('App')
.controller('ForumController', function($scope, Forums) {
    $scope.forums = Forums;
    $scope.toggleShowReplies = function(forumId) {
        var forumId = forumId;
        angular.forEach(Forums, function(forum) {
            if(forum.id === forumId) {
                forum.showReplies = !forum.showReplies;
            }
        });
    }
})