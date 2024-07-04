(function() {
   emailjs.init("0XaqNedQoxfEtp2gT");
})();

document.addEventListener("DOMContentLoaded", function (event) {
   type();
   movingBackgroundImage();
});

function sendEmail() {
          var templateParams = {         
              email: document.getElementById("email").value,
              subject: document.getElementById("subject").value,
              message: document.getElementById("message").value
          };
          
          if(templateParams.message == ""){
            document.getElementById("successModalLabel").innerText = "Failed to send email. Please try again.";
            //('Failed to send email. Please try again.');
            return;
          }
                              
          emailjs.send("service_pe6lmmd", "template_bec8j6m", templateParams)
              .then(function(response) {
                  //('Email sent successfully, Joel will be in touch soon!');
                  document.getElementById("email").value = "";
                  document.getElementById("subject").value = "";
                  document.getElementById("message").value = "";
                  document.getElementById("successModalLabel").innerText = "Email Sent Successfully!";
                  document.getElementById("message-modal").innerText = "Joel will be in touch soon.";

              }, function(error) {
                  console.log('FAILED...', error);
                  //alert('Failed to send email. Please try again.');
                  document.getElementById("successModalLabel").innerText = "Failed to send email. Please try again."

              });
      }

      // JavaScript to trigger modal programmatically
function showModal() {
$('#successModal').modal('show');
}

// Replace your alert with modal show function
function handleEmailSendSuccess() {
showModal(); // Call this function where you want to show the modal
}