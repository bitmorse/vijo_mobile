function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#000",
        showCancel: "true",
        height: "43",
        top: "0"
    });
    $.__views.index.add($.__views.search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = "http://vijo.inn.ac/api/publications.json";
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            json = JSON.parse(this.responseText);
            var search = Titanium.UI.createSearchBar({
                barColor: "#000",
                showCancel: true,
                height: 43,
                top: 0
            });
            var table = Ti.UI.createTableView({
                data: json.publications,
                search: search
            });
            $.index.add(table);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 15e3
    });
    xhr.open("GET", url);
    xhr.send();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;