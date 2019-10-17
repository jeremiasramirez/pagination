app.controller("showData", ["$scope", "$http", ($scope, $http)=>{





    //path of view info
    $scope.pathInformation = "view/viewInformation.html";
    $scope.infoArray = [];

    //pagination

    $scope.pos = 5;






    $http({


        method: "get",
        url: "/pagination/data/data.json"


    }).then((resp)=>{

        console.log(resp.data);
        $scope.infoArray = resp.data;


    })


}]);
