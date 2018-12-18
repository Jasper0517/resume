var xhr = new XMLHttpRequest();
var list = document.querySelector(".list");
var sel = document.querySelector(".select");

sel.addEventListener('change',function(){
    getData(sel.value);
});

xhr.open("post","https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",true);
xhr.setRequestHeader("Content-type","applicatoin/json");
xhr.send();
xhr.onload = function(){
    var str = JSON.parse(xhr.responseText);
    var zone = getArea(str.result.records);
  for(var i=0;i < zone.length;i++){
    sel.innerHTML = sel.innerHTML + "<option value='" + zone[i] + "'>" + zone[i] + "</option>"
  }
}



function getData(str){
    xhr.open("post","https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&q="+str,true);
    xhr.setRequestHeader("Content-type","applicatoin/json");
    xhr.send();
    xhr.onload = function(){
      var str = JSON.parse(xhr.responseText);
      var num = str.result.records.length;
      var zone = getArea(str.result.records);

      list.innerHTML = "";
      
      for(var i=0;i < num;i++){
        list.innerHTML = list.innerHTML + "<li class='listli'><div><img src='"+
        str.result.records[i].Picture1+"'><BR><p class='name'>"+
        str.result.records[i].Name+"</p><BR><p class='zone'>"+
        str.result.records[i].Zone+"</p><BR><p>"+
        str.result.records[i].Opentime+"</p><BR><p>"+
        str.result.records[i].Add+"</p><BR><p>"+
        str.result.records[i].Tel+"</p><BR><p class='Ticketinfo'>"+
        str.result.records[i].Ticketinfo+"</p><BR>"+
        "</div></li>";
      }
    }
}



function getArea(data){
var lookup = {};
var result = [];

for (var item, i = 0; item = data[i++];) {
  var zone = item.Zone;

  if (!(zone in lookup)) {
    lookup[zone] = 1;
    result.push(zone);
  }
}
return result;    
}


