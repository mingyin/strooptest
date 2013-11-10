Router.configure({
    "layoutTemplate": "theLayout"
});

Router.map(function() {
    this.route("task", {
        path: "/"
    })
});

pickTwo = function() {
    var cursor = Colors.find();

    if (cursor.count() > 0)
        Session.set("colors", _.sample(cursor.fetch(), 2))
}

Deps.autorun(pickTwo);

Template.renderChoices.color = function() {
    data = Session.get("colors");
    if( !data ) return null;
    return data[0].hex;
};

Template.renderChoices.text = function() {
    data = Session.get("colors");
    if( !data ) return null;
    return data[1].name
};

Handlebars.registerHelper("colors", function() {
    return Colors.find();
});

events = {
    "click button": function(e) {
        if (this.name === Session.get("colors")[0].name)
            console.log("correct");
        else
            console.log("wrong");

        pickTwo()
    }
};

Template.buttons.events = events;
Template.buttonsColors.events = events;
