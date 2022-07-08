var generate = document.getElementById("generatebutton");
var reset = document.getElementById("reset");
var i = 1;
var old = 0;




generate.onclick = () =>{
    let x = document.getElementById("textBox").value;
    x= parseInt(old)+parseInt(x);
    for(i;i<=x;i++)
    {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById("inner grid").appendChild(box);
        box.innerHTML += i;
        old=document.getElementById("inner grid").lastElementChild.innerHTML;

    }

}
 reset.onclick = () =>{
    document.location.reload();
 }