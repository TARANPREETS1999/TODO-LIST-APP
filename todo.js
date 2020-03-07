var app= angular.module("app");

app.controller('TaskController', ['scope','$http','$loction','$routeParams', function($scope,$http,$loction,$routeParams){
    $scope.getTasks = function(){
        $http.get('/api/tasks').then(function(response){
        }, function(error){
            if(error){
            throw error;
        }
    })

    }
    $scope.addTask=function(){
        console.log($scope.task);
        $http.post('/api/tasks', $scope.task).then(function(response){
            window.loction.href="#";
        },function(error){
            throw error;
        }
        );
    }
    $scope.removeTask=function(id){
        console.log("removing task"+id);
        $http.delete('/api/tasks' +id).then(function(response){
            window.loction.href="#";
        },function(error){
            throw error;
        }
        );
    }
    $scope.updateTask=function(id){
        $http.put('/api/tasks' +id,$scope.task).then(function(response){
            window.loction.href="#";
        },function(error){
            throw error;
        }
        );
    }

}]);