
Meteor.publish('projects', function (userId) {
 return Projects.find({createdBy: userId});
});

Meteor.publish('activities', function (userId, projectId) {
 return Activities.find({createdBy: userId, projectId: projectId});
});