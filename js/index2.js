
$(function() {
	console.log("------------------->1");
	map = new coocaakeymap($(".coocaa_btn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
	$("#startloaclmedia").unbind('itemClick').bind("itemClick", function() {
		window.WebViewJavascriptBridge.callHandler(
            'startPlugin'
            , { 'action': 'start','packageName':'com.tianci.localmedia','actionName':'','activityName':'com.tianci.localmedia.MainActivity','params':{'key1':'value1','key2':'value2'}}
            , function (responseData) {
            	console.log("send get responseData from java, data = " + responseData);
            	
            }
        );
	});
	$("#startusersetting").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#startnetsetting").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#startappstore").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#getlocation").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#getusertoken").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#getsysteminfo").unbind('itemClick').bind("itemClick", function() {
		window.WebViewJavascriptBridge.callHandler(
            'CoocaaOSApiPlugin'
            , { 'action': 'getDeviceInfo' }
            , function (responseData) {
            	console.log("send get responseData from java, data = " + responseData);
            	
            }
        );
	});
	$("#gethaslogin").unbind('itemClick').bind("itemClick", function() {
		
	});
	$("#getuserinfo").unbind('itemClick').bind("itemClick", function() {
		window.WebViewJavascriptBridge.callHandler(
            'CoocaaOSApiPlugin'
            , { 'action': 'getUserInfo' }
            , function (responseData) {
            	console.log("send get responseData from java, data = " + responseData);
            	
            }
        );
	});
});