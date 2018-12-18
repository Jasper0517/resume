var sUrl = 'https://awiclass.monoame.com/api/command.php?type=get&name=itemdata';

var data;

$.get({
  url: sUrl,
  success: function(res){
    data = JSON.parse(res);
    showdata();
  }
});


var li_html = '<li class="buy_item">{{id}}.{{name}}<div class="price">{{price}}</div><div class="del_btn" id={{id}} delid={{delid}}>X</div></li>'
var total_html = '<li class="buy_item total">總價<div class="price">{{total}}</div></li>'

$('.addbtn').click(function(){
  var name = $('.addname').val();
  var price = $('.addprice').val();
  if(name == '' || price == '') return;
  
  data.push({name: name,price:price});
  showdata();
  $('.addname').val('');
  $('.addprice').val('');
});


function showdata(){
  $('#items_list').html('');
  var total = 0;
  for(var i = 0;i < data.length;i++){
      var li_html_temp = li_html.replace('{{id}}',i)
      .replace('{{name}}',data[i].name)
      .replace('{{price}}',data[i].price)
      .replace('{{id}}','del'+i)
      .replace('{{delid}}',i);
      total += (data[i].price * 1);    
      $('#items_list').append(li_html_temp);
      $('#del' + i).click(function(){
        removedata($(this).attr('delid'));
      });
    }
      var total_html_temp = total_html.replace('{{total}}',total);
      $('#items_list').append(total_html_temp);
}


function removedata(id){
  data.splice(id,1);
  showdata();
}