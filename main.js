Ax = document.getElementById("x1imp");
Ay = document.getElementById("y1imp");
Bx = document.getElementById("x2imp");
By = document.getElementById("y2imp");
Cx = document.getElementById("x3imp");
Cy = document.getElementById("y3imp");

document.getElementById("calcbtn").addEventListener("click", btncalc);

function btncalc(){
    AxEl = +Ax.value;
    AyEl = +Ay.value;
    BxEl = +Bx.value;
    ByEl = +By.value;
    CxEl = +Cx.value;
    CyEl = +Cy.value;
    document.getElementById("about").innerHTML = dist(AxEl,AyEl,BxEl,ByEl);
    document.getElementById("acout").innerHTML = dist(AxEl,AyEl,CxEl,CyEl);
    document.getElementById("bcout").innerHTML = dist(BxEl,ByEl,CxEl,CyEl);
    document.getElementById("abcout").innerHTML = dist(BxEl,ByEl,CxEl,CyEl)+
    dist(AxEl,AyEl,CxEl,CyEl)+dist(AxEl,AyEl,BxEl,ByEl);
    document.getElementById("resdiv").style.display = "block";
}
function dist(x1,y1,x2,y2){
    return Math.sqrt((y2-y1)**2+(x2-x1)**2);
}