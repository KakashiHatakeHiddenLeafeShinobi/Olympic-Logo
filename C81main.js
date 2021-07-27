canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(100,100,30,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(150,100,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=6;
ctx.arc(200,100,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=6;
ctx.arc(120,130,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=6;
ctx.arc(180,130,30,0,2*Math.PI);
ctx.stroke();
canvas.addEventListene("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
ctx.stroke();
}