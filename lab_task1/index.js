$(function () {
    $("#BtnBtn").on("click", function (e) {
      console.log("BtnBtn clicked...");
  
      const name = $("#name").val();
      const email = $("#email").val();
      const password = $("#password").val();
  
      if (name.length == "" || email.length == "" || password.length == "") {
        console.log("Name Empty...");
        console.log("Email Empty...");
        console.log("Password Empty...");
        return false;
      }
      console.log("name: ", name);
      console.log("email: ", email);
      console.log("password: ", password);
    });
  });
  