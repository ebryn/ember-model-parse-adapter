Ember.ParseAdapter = Ember.Adapter.extend({
  find: function(record, id) {

  },

  findAll: function(klass, records) {
    var className = klass.toString().split('.')[1];
    return this._ajax(className).then(function(json) {
      records.load(klass, json.results);
    }, function(err) {
      console.log("Error occurred:", err);
    });
  },

  _ajax: function(urlSuffix) {
    var url = "https://api.parse.com/1/classes/" + urlSuffix;
    return $.ajax(url, {
      headers: {
        "X-Parse-Application-Id": "ezGrks7YbAl62Cx8dj58H46iELdqNENdmHnjIciK",
        "X-Parse-REST-API-Key": "b5iK2Y62SUv9325cbJcim7IuGiu7tZpCPZdSMWrk"
      }
    });
  }
});