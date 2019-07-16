
$(function() {
	console.log("------------------->1");
	map = new coocaakeymap($(".coocaabtn"), null, "btnFocus", function() {}, function(val) {}, function(obj) {});
    $("#walk").unbind('itemClick').bind("itemClick", function() {
    	console.log("点击了不感兴趣");
    });
    $("#goToDown").unbind('itemClick').bind("itemClick", function() {
    	console.log("点击了去看看");
    	
        //call native method
        window.WebViewJavascriptBridge.callHandler(
            'CoocaaOSApiPlugin'
            , { 'param': 'coocaa.intent.action.APP_STORE_HOME' }
            , function (responseData) {
            	console.log("send get responseData from java, data = " + responseData);
            }
        );
    	
    });
	
});