function sendMail() {
    var sender = document.getElementById("inputEmail").value;
    var link = "mailto:webprojcatering@gmail.com"
             + "?cc="+sender
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('InputMessage').value)
    ;
    console.log(document.getElementById('InputMessage').value, "EMAIL SENT")
    window.location.href = link;
}
