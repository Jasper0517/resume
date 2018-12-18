var btn = document.querySelector(".btn");
var list = document.querySelector(".list");
var data = JSON.parse(localStorage.getItem("list_item")) || [];

btn.addEventListener('click',addlist);
updlist(data);


function addlist(e){
    e.preventDefault();        
    var cm = document.getElementById("cm").value/100;
    var kg = document.getElementById("kg").value;
    if(cm === "" || kg === "") {
        alert("兩個欄位為必填");
        return;
    }
    //BMI = 體重(公斤) / 身高2(公尺2)
    var bmi = Math.round(((kg)/(cm*cm))*100)/100;
    var status = "";
    var status_name = "";
    if(bmi < 18.5){
        status = 'green';
        status_name = "過輕"
    }else if(bmi >= 18.5 && bmi < 24){
        status = 'blue';   
        status_name = "理想"     
    }else if( bmi >= 24 && bmi < 27){
        status = 'orange';   
        status_name = "過重"             
    }else if(bmi >= 27 && bmi < 30){
        status = 'pink';  
        status_name = "輕度肥胖"             
    }else if(bmi >= 30 && bmi < 35){
        status = 'purple';                                
        status_name = "中度肥胖"             
    }else{
        status = 'red';                                        
        status_name = "重度肥胖"             
    }
    var date = new Date();
    var todo = {
        status: status,
        status_name: status_name,
        bmi: bmi,
        cm: cm,
        kg: kg,
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }
    data.push(todo);
    localStorage.setItem("list_item",JSON.stringify(data));
    updlist(data);
    cm = "";
    kg = "";
}   

function updlist(data){
    var ilen = data.length;
    var str = "";
    console.log(data);
    for(var i = ilen - 1;i >= 0;i--){
        str = str + '<li class='+data[i].status+
        '><span class="status_name">' + data[i].status_name + '</span>'+
        '<span class="title">BMI:</span>'+data[i].bmi+'<span class="title">HEIGHT:</span>'+
        (data[i].cm)*100+'<span class="title">WEIGHT:</span>'+data[i].kg+
        '<span class="time">'+data[i].month+'-'+data[i].date+'-'+data[i].year+'</span></li>';       
    }
    list.innerHTML = str;
}