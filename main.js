var mouseevent="empty";
var last_x_position , last_y_position ;
canvas=document.getElementById("myCanvas");
ctx =canvas.getContext("2d");
var color="black";
var widthofline=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseevent="mouseleave";  
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  mouseevent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
 var   current_x_position=e.clientX-canvas.offsetLeft;
       current_y_position=e.clientY-canvas.offsetTop;
       if(mouseevent=="mousedown") {
           ctx.beginPath();
           ctx.strokeStyle=color;
           ctx.lineWidth=widthofline;
           ctx.arc(current_x_position, current_y_position,radius,0,2*Math.PI);
           ctx.stroke();
       }
       
}
function cleararea(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
