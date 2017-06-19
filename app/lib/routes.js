Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/project/add/add', {
  name: 'addProject',
  controller: 'ProjectsController',
  action: 'insert',
  where: 'client'
});

Router.route('/project/list/list', {
  name: 'projectList',
  controller: 'ProjectsController',
  action: 'list',
  where: 'client'
});

Router.route('/project/:_id', {
  name: 'editProject',
  controller: 'ProjectsController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
     this.next();
  }
}, {only: ['projectList', 'addProject']});
