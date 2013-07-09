function classToEndpoint(klass) {
  return klass.toString().split('.')[1];
}

Ember.ParseAdapter = Ember.Adapter.extend({
  find: function(record, id) {
    var endpoint = classToEndpoint(record.constructor);

    return this._ajax(endpoint + "/" + id).then(function(json) {
      record.load(id, json);
    }, function(err) {
      console.log("Error occurred:", err);
    });
  },

  findAll: function(klass, records) {
    var endpoint = classToEndpoint(klass);

    return this._ajax(endpoint).then(function(json) {
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