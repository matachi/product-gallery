'use strict';

app.controller('ProductListController', function($scope, $location, Product) {
  var page_size = 6;

  Array.prototype.chunk = function(page_size) {
    var R = [];
    for (var i = 0; i < this.length; i += page_size)
      R.push(this.slice(i, i + page_size));
    return R;
  }

  var page = $location.search().page;
  if (page) {
    $scope.page = page;
  } else {
    $scope.page = 1;
  }

  $scope.prev_page = $scope.page - 1;
  $scope.next_page = parseInt($scope.page) + 1;

  var upperlimit = 0;
  $scope.isOutside = function(page) {
    return page <= 0 || page > upperlimit;
  }

  Product.query($scope.page, page_size, function(data) {
    upperlimit = data.count / page_size + 1;
    if ($scope.isOutside($scope.prev_page)) {
      $scope.prev_page_url = '#' + $location.url();
    } else {
      $scope.prev_page_url = '#/products?page=' + $scope.prev_page;
    }
    if ($scope.isOutside($scope.next_page)) {
      $scope.next_page_url = '#' + $location.url();
    } else {
      $scope.next_page_url = '#/products?page=' + $scope.next_page;
    }
    $scope.product_rows = data.results.chunk(3);
  });
});

app.controller('ProductDetailController',
    function($scope, $routeParams, Product) {
  Product.get($routeParams.productId, function(data) {
    $scope.product = data;
  });
});

app.controller('NavbarController', function($scope, $location) {
  $scope.getActive = function(path) {
    return $location.url().split('?')[0] == path;
  }
});
