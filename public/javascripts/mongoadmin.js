$(function() {
try{
	setTimeout(function(){
		$(".success-tips").animate({bottom: "-60px"});
		$(".error-tips").animate({bottom: "-60px"});
	}, 3000);
}catch(e){
}

var mdata = {},
    url = '/javascripts/data.json';
$.getJSON(url, function(data){

  console.log(data);

  mdata = data;

  render_editor_form(mdata);
  render_event_form(mdata);
});

var render_editor_form=function(data){
$('#jsonFile').val($.toJSON(data));
};

var render_event_form = function(){
  $("#c_save").on("click", function(event){
    var data = {};
    data['content'] = JSON.stringify(mdata);
 console.info(data);

    $.ajax({
      type: 'POST',
      url: '/add',
      data: data,
      success: function(data, textStatus){
        if(data.success){
          alert("save done");
        }
      }
    });
  })
}

});