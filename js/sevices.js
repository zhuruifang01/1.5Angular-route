angular.module("sevices",[])
    .factory("indexDate",function($http){
        // return [{title:"标题1",con:"内容"}]
        return $http({url:"1.txt"})
    })