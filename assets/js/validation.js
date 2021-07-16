function validate() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");

  if (fname.value.trim() == "") {
    alert("First Name is required");
    fname.focus();
    fname.style.border = "solid 2px red";
    return false;
  }

  if (lname.value.trim() == "") {
    alert("Last Name is required");
    lname.focus();
    lname.style.border = "solid 2px red";
    return false;
  }

  if (phone.value.trim() == "") {
    alert("Phone is required");
    phone.focus();
    phone.style.border = "solid 2px red";
    return false;
  }

  if (email.value.trim() == "") {
    alert("Email is required");
    email.focus();
    email.style.border = "solid 2px red";
    return false;
  }

  let emails = f1.email.value;
  atpos = emails.indexOf("@");
  dotpos = emails.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Invalid email address");
    return false;
  }

  let phone1 = f1.phone.value;
  if (phone1 == "" || isNaN(phone1) || phone1.length != 10) {
    alert("Please, enter a 10 digits phone number");
    return false;
  } else {
    alert("Thank you!");
    return true;
  }
}
