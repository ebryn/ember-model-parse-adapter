var App = Ember.Application.create();

var attr = Ember.attr;

App.Person = Ember.Model.extend({
  objectId: attr(),
  name: attr(),
  createdAt: attr(Date),
  updatedAt: attr(Date)
});

App.Person.reopenClass({
  primaryKey: 'objectId',
  adapter: Ember.ParseAdapter.create()
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Person.find();
  }
});