document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady() {
       alert(navigator.notification);   
 }
     
     
$(document).on("pagecreate","#pageone",function(){
    $('#stuff').on("click", function(){
        random();
    });            
});      
    
 



function random() {
    
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
 
