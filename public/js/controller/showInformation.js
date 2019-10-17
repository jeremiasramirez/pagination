app.controller("showData", ["$scope", "$http", ($scope, $http)=>{

    //path of view info

    $scope.pathInformation = "view/viewInformation.html";

    /*
        pagination logic

     */

    $scope.infoArray = [];
    $scope.pos = 5;
    $scope.len = 0;
    $scope.counter = 1;


    /*
        htt request to .json data
     */

    $http({

        method: "get",
        url: "/pagination/data/data.json"

    //    if completed requested ?
    }).then((resp)=>{

        $scope.infoArray = resp.data;

        $scope.len = Math.ceil((resp.data.length) / 5);

    });

    //if click to next button

    $scope.nexts = function(){

        if($scope.counter < $scope.len){

            // incrementing counter & position of data
            $scope.counter +=1;
            $scope.pos += 5;

        }
        /*
            is equal to pos for returns to one element
        */
        else if($scope.counter === $scope.len){

            $scope.pos = 5;
            $scope.counter = 1;

        }

    };

    //if click to next button

    $scope.backs = function(){
        //decrementing counter & position of data

        if($scope.counter > 1){

            $scope.counter -=1;
            $scope.pos -= 5;

        }

    };





}]);
