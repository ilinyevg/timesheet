Activities = new Mongo.Collection('activities');

Activities.attachSchema (new SimpleSchema({
    periodFrom: {
      type:Date,
      autoValue: function () {
        //get Monday
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        return new Date(d.setDate(diff));
      }
    },
    periodTo: {
      type:Date,
      autoValue: function () {
        //get Sunday
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 6 ? -6:1); // adjust when day is sunday
        return new Date(d.setDate(diff));
      }
    },
    duration: {
      type: Number,
      label: "Duration, hours"
    },
    projectId: {
      type: String,
      autoValue: function () {
        return this.projectId
      }
    },

    createdBy: {
      type: String,
      autoValue: function () {
        return this.userId
      }
    },
    createdDate: {
      type: Date,
      autoValue: function () {
        return new Date().getDate()
      }
    }
}));

if (Meteor.isServer) {
  Activities.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Activities.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
