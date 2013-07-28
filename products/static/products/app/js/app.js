'use strict';

var app = angular.module('pgApp', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home',
      {
        templateUrl: 'static/products/app/partials/home.html'
      })
    .when('/products',
      {
        controller: 'ProductListController',
        templateUrl: 'static/products/app/partials/products.html'
      })
    .when('/products/:productId',
      {
        controller: 'ProductDetailController',
        templateUrl: 'static/products/app/partials/product.html'
      })
    .when('/about',
      {
        templateUrl: 'static/products/app/partials/about.html'
      })
    .otherwise({ redirectTo: '/home' });
});
