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

function saveCookie(nameCookie, valueCookie, expireDays) {
    var date = new Date()
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000))
    var expire = "expire=" + date.toUTCString()
    document.cookie = nameCookie + "=" + valueCookie + ";" + expire + ";path=/"
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

/*
################################################
################# Sign in ######################
################################################
*/

var cookies = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    contact: document.getElementById("contact").value,
    pass: document.getElementById("passwd").value,
    passconf: document.getElementById("passwdConfirm").value,
    birth: document.getElementById("birth").value
}

document.getElementById("sign").addEventListener('click', function () {
    for (var [key, value] of Object.entries(cookies)) {
        saveCookie(key, value, 1)
    } 

    console.log(document.cookie)
    console.log("Cookies added")
})

document.getElementById("log").addEventListener('click', function () {
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    console.log(user)
    console.log(pass)
    //console.log("The user name is: " + getCookie("user"));
    if (user == getCookie("contact") && pass == getCookie("pass")){
        document.getElementById("correct").style.display = "block"
        document.getElementById("incorrect").style.display = "none"
        console.log("user correct")
    }
    else {
        document.getElementById("incorrect").style.display = "block"
        document.getElementById("correct").style.display = "none"
        console.log("user correct")
    }
    console.log(document.cookie)
    console.log("Cookie checked")
})

/*
################################################
############ Show me the cookies ###############
################################################
*/

document.getElementById("show-button").addEventListener('click', function (){
    for (var [key, value] of Object.entries(cookies)) {
        //esto hay que cambiarlo y llamar a las cookies no al objeto
        document.getElementById("info").innerHTML += key + ": " + value + "<br>"
        console.log(key)
        console.log(value)
    }
})

document.getElementById("delete-button").addEventListener('click', function () {
    var cookies = document.cookie.split(";")

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf("=")
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
    console.log("%cCookies Deleted!.", 'background: #222; color: red')
})


