'use strict';

app.factory('Product', function($http) {

  function getUrl(id) {
    id = typeof id !== 'undefined' ? id : '';
    return 'http://127.0.0.1:8000/api/products/' + id + '?format=json';
  }

  return {
    get: function(id, callback) {
      return $http.get(getUrl(id)).success(callback);
    },
    query: function(page, page_size, callback) {
      return $http.get(getUrl() + '&page_size=' + page_size + '&page=' + page).success(callback);
    },
    save: function(product, callback) {
      return $http.post(getUrl(), product).success(callback);
    },
    remove: function(id, callback) {
      return $http.delete(getUrl(id)).success(callback);
    },
    put: function(product, callback) {
      return $http.put(getUrl(product.id), product).success(callback);
    }
  };
});
