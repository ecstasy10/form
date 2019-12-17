/* 
################################################
################### Menu #######################
################################################ 
*/

document.getElementById("reg-button").addEventListener('click', function () {
    tab("register", "login", "name")
})

document.getElementById("login-button").addEventListener('click', function () {
    tab("login", "register", "user")
})

function tab (show, hide, focus){
    document.getElementById(show).style.display = "block"
    document.getElementById(focus).focus()
    document.getElementById(hide).style.display = "none"
}

/*
################################################
################# Cookies ######################
################################################
*/

/*
*    Create cookies:
*        document.cookie = "user=username"
*/

function setCookie(nameCookie, valueCookie, expireDays) {
    var date = new Date()
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000))
    var expire = "expire=" + date.toUTCString()
    document.cookie = nameCookie + "=" + valueCookie + ";" + expire + ";path=/"
    //Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
    console.log("%cCookies created!", 'background: #222; color: white')
}

function getCookie(nameCookie) {
    var name = nameCookie + "="
    var cookieDecoded = decodeURIComponent(document.cookie)
    var arrayCookie = cookieDecoded.split(';')
    for (var i = 0; i < arrayCookie.length; i++) {
        var cookie = arrayCookie[i]
        while (cookie.charAt(0) == ' ')
            cookie = cookie.substring(1)
        if (cookie.indexOf(name) == 0){
            console.log("%cOK! Cookie does exists.", 'background: #222; color: green')
            return cookie.substring(name.length, cookie.length)
        }
    }
    console.log("%cKO! Cookie does NOT exists.", 'background: #222; color: red')
    return  null
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
} 

/*
################################################
################# Buttons ######################
################################################
*/
/*
var cookies = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    contact: document.getElementById("contact").value,
    pass: document.getElementById("passwd").value,
    passconf: document.getElementById("passwdConfirm").value,
    birth: document.getElementById("birth").value
}
for (var [key, value] of Object.entries(cookies)) {
    setCookie(key, value, 1)
    console.log("key: " + key);
}
*/

/* ######### PassWord Validation ######### */
document.getElementById("sign").addEventListener('click', function () {
    var pass = document.getElementById("passwd").value
    var passC = document.getElementById("passwdConfirm").value

    if (pass != passC || pass == "" || pass == "")
        document.getElementById("incorrectPass").style.display = "block"
    else {
        setCookie("contact", document.getElementById("contact").value, 1)
        setCookie("pass", pass, 1)
        setCookie("passconf", passC, 1)
        document.getElementById("incorrectPass").style.display = "none"
        console.log(document.cookie)
        console.log("Cookies added")
    }

})

document.getElementById("log").addEventListener('click', function () {
    var userSession = document.getElementById("user").value
    var passSession = document.getElementById("pass").value
    console.log(userSession)
    console.log(passSession)
    //console.log("The user name is: " + getCookie("user"));
    if (userSession == getCookie("contact") && passSession == getCookie("pass")){
        document.getElementById("correct").style.display = "block"
        document.getElementById("incorrect").style.display = "none"
        document.getElementById("logout-button").style.display = ""
        document.getElementById("reg-button").style.display = "none"
        document.getElementById("login-button").style.display = "none"
        console.log("user correct")
        setCookie("userSession", userSession, 0.041667)
        setCookie("passSession", passSession, 0.041667)
        console.log("%cSession Created! Cookies lasts for 1h.", 'background: #222; color: green')
    }
    else {
        document.getElementById("incorrect").style.display = "block"
        document.getElementById("correct").style.display = "none"
        console.log("user incorrect")
    }
    console.log(document.cookie)
    console.log("Cookie checked")
})

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log("%cCookies Deleted!.", 'background: #222; color: orange')
}

document.getElementById("logout-button").addEventListener('click', function () {
    delete_cookie("userSession")
    delete_cookie("passSession")
    location.reload()
})



/* ########## show password ################ */
function showPasswd(field1, field2) {
    var show = document.getElementById(field1)
    var show2 = document.getElementById(field2)

    if (show.type == "password") {
        show.type = "text";
        if (show2)
            show2.type = "text";
    } else {
        show.type = "password";
        if (show2)
            show2.type = "password";
    }
}

/*
################################################
################# Validate #####################
################################################
*/

var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;