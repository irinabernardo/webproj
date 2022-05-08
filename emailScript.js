document.getElementById('inputName').addEventListener('change', function() {
    if (this.value == ""){
        $('#nameWarning').show();
    } else{
        $('#nameWarning').hide();
    };
});

document.getElementById('inputOccasion').addEventListener('change', function() {
    if (this.value == "What is the occasion for?"){
        $('#occWarning').show();
    } else{
        $('#occWarning').hide();
    };
});

function sendMail() {
    var name = document.getElementById("inputName").value;
    var phone = document.getElementById("inputPhone").value;
    var occasion = document.getElementById("inputOccasion").value;
    var message = document.getElementById('InputMessage').value;
    var sender = document.getElementById("inputEmail").value;
    var locAddress = document.getElementById("inputAddress").value;
    console.log(name,phone,occasion,message)
    if (name == ""){
        alert('We want to know you.Please enter name before sending us your query');
    }else if(phone == "" || sender ==""){
        alert('We will need to reach out to you.Please enter phone and email so we can follow up with you.');    
        }else if(message == ""){
            alert('Please query in the appropriate field.');
        } else if(locAddress == "" || occasion){
            alert('Please verify address and/or occasion field.');
        } else {
        var link = "mailto:webprojcatering@gmail.com"
             + "?cc="+sender
             + "&subject=" + encodeURIComponent(name+": "+occasion)
             + "&body=" + encodeURIComponent("From: "+name+" " +" Phone: "+ phone +" "+message)
    ;
    console.log(occasion, "EMAIL SENT")
    window.location.href = link;
    }
}
