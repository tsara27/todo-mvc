import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Help my mother to serve breakfast!",
      isCompleted: false
    },
    {
      id: 2,
      title: "Coding again!",
      isCompleted: false
    },
    {
      id: 3,
      title: "Learning Ember.JS",
      isCompleted: true
    }
  ]
});
