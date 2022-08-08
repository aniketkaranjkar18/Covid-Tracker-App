const url ="https://covid19.mathdro.id/api";

let myApp = angular.module("MyApp",[]);

myApp.controller("MyController",($scope,$http)=>{
    $scope.title ="Stay Home Stay Safe";

    $http.get(url).then((response)=>{
       
        $scope.responseData = response.data;
        console.log( $scope.responseData);

    },
    (error)=>{
        console.log(error);
    });

    $scope.countryWiseData=()=>{
        let countryName = $scope.countryName;
        if(countryName===""){
            $scope.countryData=undefined;
            return;
        }
        else {
             $http.get(`${url}/countries/${countryName}`) .then((response)=>{
               $scope.countryData=response.data;
             },(error)=>{
                console.log(error);
             });
        }
    }
});
