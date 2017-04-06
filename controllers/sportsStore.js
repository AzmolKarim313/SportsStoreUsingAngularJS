angular.module("sportsStore").controller("sportsStoreCtrl", function ($scope) {
    $scope.data = {
        products: [
        {name: "Prodect#1", description: "A product", category: "Category#1", price: 100},
        {name: "Prodect#2", description: "A product", category: "Category#2", price: 110},
        {name: "Prodect#3", description: "A product", category: "Category#3", price: 200},
        {name: "Prodect#4", description: "A product", category: "Category#4", price: 210}]
    };
});