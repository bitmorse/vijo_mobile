
var url = "http://vijo.inn.ac/api/publications.json";
var xhr = Ti.Network.createHTTPClient({
	onload: function(e) {
		// this.responseText holds the raw text return of the message (used for JSON)
		// this.responseXML holds any returned XML (used for SOAP web services)
		// this.responseData holds any returned binary data


		json = JSON.parse(this.responseText);

		var search = Titanium.UI.createSearchBar({
		    barColor:'#000', 
		    showCancel:true,
		    height:43,
		    top:0,
		});

		var table = Ti.UI.createTableView({
		  data: json.publications,
		  search: search
		});

		$.index.add(table);
	},
	
	onerror: function(e) {
		Ti.API.debug(e.error);
		alert('error');
	},
	
	timeout:15000
});
 
xhr.open("GET", url);
xhr.send();







$.index.open();
