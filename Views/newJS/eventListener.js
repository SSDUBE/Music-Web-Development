function onresponse(e) {
    $.toast({
        text: e,
        heading: "Error",
        icon: 'error',
        showHideTransition: 'plain',
        hideAfter: '7000',
        position: 'top-left',
        bgColor: '#FF1356',
        textColor: 'white'
    });
}

function url_fetch(url, onresponse, method='POST', async=false) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        onresponse(this);
    };
    xhttp.open(method, url, async);
    return xhttp;
}

function sendMail(name, email, message) {
    var returnvalue = false;
    var fetch = url_fetch('http://127.0.0.1:8080/CashTime/Controls/sendMail.php?name=' + name + "&email=" + email + "&message=" + message, function(data) {
        if (data.status == 200) {
            //window.location = "http://127.0.0.1:8080/CashTime/file.html";
            alert(data.response);
        }
    }, "GET");
    fetch.send();
    return returnvalue;
}

document.getElementById("submitForm").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    onresponse("name can not be empty");
    sendMail(name, email, message);
});



