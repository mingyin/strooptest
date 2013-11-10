Meteor.startup(function(){
    if( Colors.find().count() > 0 ) return;

    Colors.insert({
        name: "Red",
        hex: "#DD0000"
    });

    Colors.insert({
        name: "Blue",
        hex: "#0000DD"
    });

    Colors.insert({
        name: "Green",
        hex: "#00DD00"
    });

    Colors.insert({
        name: "Yellow",
        hex: "#DDDD00"
    });

    Colors.insert({
        name: "Cyan",
        hex: "#00DDDD"
    });

    Colors.insert({
        name: "Magenta",
        hex: "#DD00DD"
    });
});

