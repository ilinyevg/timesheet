/*****************************************************************************/
/* Add: Event Handlers */
/*****************************************************************************/
Template.Add.events({
});

/*****************************************************************************/
/* Add: Helpers */
/*****************************************************************************/
Template.Add.helpers({
});

/*****************************************************************************/
/* Add: Lifecycle Hooks */
/*****************************************************************************/
Template.Add.onCreated(function () {
    console.log("1");
});

Template.Add.onRendered(function () {
    console.log("2");
});

Template.Add.onDestroyed(function () {
    console.log("3");
});

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('projectList');
  }
});

