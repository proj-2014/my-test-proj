
nunjucks.configure('/static/tpl');

$(document).ready(function(){
    setup();
});

var setup = function () {
	//alert('now in setup');
	$('#C1').click(function(){
	    grabJsonData();
	});
	
};

var grabJsonData = function (params) {
	var that = this;
	
	var deCache = Math.random();
	var ajaxObj = {};
	var params = {};
	
	ajaxObj.dataType = 'json';
	ajaxObj.type = 'POST';
	//ajaxObj.type = 'GET';
	//ajaxObj.url = '/test/ep/grabjsondata';
	ajaxObj.url = '/test/ep/grabjsondata?dc='+deCache;
	
	
	ajaxObj.beforeSend = function (xhr, settings) {
		xhr.setRequestHeader('x-clientID', 'someUniqueID');
	};
	
	ajaxObj.success = function (resp){
		window.alert('Got JSON data:' + JSON.stringify(resp));
		$('#results').html('<h2>Results:</h2><pre>ID:' + resp.id +'<br>Title: '+ resp.title+'</pre>');
		
		$('#results2').append(nunjucks.render('_test.html', {
		    'title': resp.title,
		    'id': resp.id
		}));
	};
		

	
	ajaxObj.error = function(ctx, xhr) {
		window.alert('Error on Ajax request: ');
		return ;
	};
	
	$.ajax(ajaxObj);	
}

//myfun();


var myfun = function (){
	alert('will call grabJsonData soon');
	//grabJsonData();
	grabJsonData();
}
