 console.log("js loaded");

document.addEventListener("deviceready", onDeviceReady, false);

 
function onDeviceReady() {
     console.log("onDeviceReady");
    console.log(navigator.notification);
    alert(navigator.notification);   
 }
     
     
$(document).on("pagecreate","#pageone",function(){
    console.log("pagecreate");
    $('#stuff').on("click", function(){
        console.log("click");
        random();
    });            
});      
    
 



function random() {
    console.log("random");
    
    var Rnum = Math.floor((Math.random() * 10) + 1);
    
    if(Rnum >= 1 && Rnum < 5){
        $("#myText").text("TRUE");
        navigator.notification.beep(1);  
        navigator.vibrate(2000);                     
    } 

    else { 
        $("#myText").text("FALSE");
        navigator.notification.beep(2);      
        navigator.vibrate([200, 300, 500]);      
    }
    
}
 
