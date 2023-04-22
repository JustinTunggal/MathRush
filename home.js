var storedItem = localStorage.getItem("storedItem");

function username()
{
var nama = document.getElementById("userInput").value;
localStorage.setItem("storedItem", nama);
return false;
}

document.getElementById("us").innerHTML=localStorage.getItem("storedItem");
