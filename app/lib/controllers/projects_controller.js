ProjectsController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('projects', Meteor.userId());
  },

  data: function () {
    return Projects.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('AddProject', {});
  },

  list: function() {
    this.render('ProjectList', {});
  },

  edit: function() {
    this.render('EditProject', {});
  },
  
  // You can provide any of the hook options
  
  // onRun: function () {
  //   this.next();
  // },
  // onRerun: function () {
  //   this.next();
  // },
  // onBeforeAction: function () {
  //   this.next();
  // },
  
  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.
  // Example:
  //  action: 'myActionFunction'
  
  // action: function () {
  //   this.render();
  // },
  // onAfterAction: function () {
  // },
  // onStop: function () {
  // }
});
