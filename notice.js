function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  }
  
  function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/" + "; SameSite=Lax";
  }
  
  const notice = document.getElementById("notice");
  const dismissButton = document.getElementById("dismiss-button");
  
  if (getCookie("noticeDismissed") === "true") {
    notice.style.display = "none";
  }
  
  dismissButton.addEventListener("click", function() {
    notice.style.display = "none";
    setCookie("noticeDismissed", "true", 48);
  });
  