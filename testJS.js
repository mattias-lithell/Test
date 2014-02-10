function changeBackgroundColor()
{
    var x = document.getElementById("ColorField").value;
   document.body.style.background = x;
        
}
function changePage(page)
{
    if(page === 'second')
    {
        parent.location='page2.html'
    }
    else
    {
        parent.location='index.html'
    }
        
}