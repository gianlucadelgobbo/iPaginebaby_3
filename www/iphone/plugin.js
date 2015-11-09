
var FB = {
    login: function() {
        var appId = "366045943462852";
        window.plugins.facebookConnect.login({permissions: ["email","publish_stream","manage_pages"], appId: appId}, function(result) {
            console.log("facebookConnect.login:" + JSON.stringify(result));
			if (result.id) {
				 //console.log('logged in');
				 drawMe(result);
			} else {
				 //console.log('not logged in');
				 $("#fb-like-box-cnt").html("<li>Per accedere a Facebook devi essere loggato, <a href=\"#\" onclick=\"login()\">accedi ora</a></li>");
				 $("#fav-results").html("<li>Per visualizzare i preferiti devi essere loggato, <a href=\"#\" onclick=\"login()\">accedi ora</a></li>");
			}
        });
    },
    requestWithGraphPath: function() {
        window.plugins.facebookConnect.requestWithGraphPath("/me", function(result) {
            //console.log("facebookConnect.requestWithGraphPath:" + JSON.stringify(result));
			//console.log('logged in');
			//drawMe(result);
        });
    },
    api: function(path, httpMethod, options, callback) {
        window.plugins.facebookConnect.requestWithGraphPath(path, options, httpMethod, callback);
    },
    initWithAppId: function() {
        var appId = "366045943462852";
        window.plugins.facebookConnect.initWithAppId(appId, function(result) {
            //console.log("facebookConnect.initWithAppId:" + JSON.stringify(result));
			if (result.accessToken) {
				at = result.accessToken;
				this.login();
			}
        });
    },
    dialog : function() {
        var dialogOptions = {
            link: 'https://developers.facebook.com/docs/reference/dialogs/',
            picture: 'http://fbrell.com/f8.jpg',
            name: 'Facebook Dialogs',
            caption: 'Reference Documentation',
            description: 'Using Dialogs to interact with users.'
        };

        window.plugins.facebookConnect.dialog('feed', dialogOptions, function(response) {
            //console.log("facebookConnect.dialog:" + JSON.stringify(response));
        });
    },
    dialog2 : function(dialogOptions, callback) {
        window.plugins.facebookConnect.dialog('feed', dialogOptions, callback);
    },
    logout : function() {
        window.plugins.facebookConnect.logout(function(result) {
            //console.log("facebookConnect.logout:" + JSON.stringify(result));
        });
    }
};
