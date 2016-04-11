var profile = document.getElementById("profilePic");

profile.addEventListener('click', function(){
    profile.innerHTML = "<img src='http://dn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png'>"
});

var nameInfo = document.getElementById("names");
nameInfo.addEventListener('click', function(){
    nameInfo.innerHTML = 'Jim Wolf';
    console.log("click is working")
});

var ageInfo = document.getElementById("age");
ageInfo.addEventListener('click', function(){
    ageInfo.innerHTML = '30';
});

var locInfo = document.getElementById("location");
locInfo.addEventListener('click', function(){
    locInfo.innerHTML = 'Boulder, CO';
});