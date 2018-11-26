setTimeout(function () {
    document.getElementById("unu").style.opacity = "0";
}, 1);
setTimeout(function () {
    document.getElementById("unu").style.opacity = "1";
}, 12000);
document.getElementById("button").addEventListener("click", function () {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user === "user123" && pass === "pass123") {

        document.getElementById("p").innerHTML = "Wait a few seconds..";
        document.getElementById("button").innerHTML = "Log In";
        setTimeout(() => {
            document.getElementById("p").innerHTML = "You are now logged in..";
        }, 2000);
    } else {
        document.getElementById("p").innerHTML = "Your Username Or Password is wrong";
        document.getElementById("button").innerHTML = "Try Again";

    }
});