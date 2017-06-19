Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
  name:{
    type: String,
    label: "Project name",
    max: 255
  },
  description: {
    type:String,
    label: "Description",
    max: 1024
  },
  deadline: {
    type:Date,
    label: "Deadline",
    optional: true
  },
  priority: {
    type:String,
    label: "Priority",
    allowedValues: ['High', 'Medium', 'Low'],
    optional: true
  },
  createdBy: {
    type: String, 
    optional: true,
    autoValue: function () {
      return this.userId
    } 
  }
  // ,
  // createdDate: {
  //   type: Date,
  //   optional: true,
  //   autoValue: function () {
  //     return new Date().getDate()
  //   } 
  // }
}));

if (Meteor.isServer) {
  Projects.allow({
    insert: function (userId, doc) { 
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}
