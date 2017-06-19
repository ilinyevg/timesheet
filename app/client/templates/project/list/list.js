/*****************************************************************************/
/* List: Event Handlers */
/*****************************************************************************/
// Template.List.events({
// });

/*****************************************************************************/
/* List: Helpers */
/*****************************************************************************/
// Template.List.helpers({
// });

/*****************************************************************************/
/* List: Lifecycle Hooks ProjectList*/
/*****************************************************************************/
// Template.List.onCreated(function () {
// });

// Template.List.onRendered(function () {
// });

// Template.List.onDestroyed(function () {
// });

Template.ProjectList.events({
});  

Template.ProjectList.helpers({
  
  projects: function () { 
    return Projects.find();
  },

  deadlineFormatted: function () {
     
    return moment(this.deadline).format("MMM Do YY");
  },

  priorityHigh: function() {
    if (this.priority === 'High')
      return true;
    else
      return false;
  },

  priorityMedium: function() {
    if (this.priority === 'Medium')
      return true;
    else
      return false;
  },

  priorityLow: function() {
    if (this.priority === 'Low')
      return true;
    else
      return false;
  }
});
