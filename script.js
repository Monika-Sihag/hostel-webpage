(() => {
  "use strict";

  const leaveForm = document.getElementById("leaveForm");
  const leaveMessage = document.getElementById("leaveMessage");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  function showMessage(target, text, success) {
    target.textContent = text;
    target.style.color = success ? "#0f766e" : "#b91c1c";
  }

  leaveForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const roomNumber = document.getElementById("roomNumber").value.trim();
    const leaveFrom = document.getElementById("leaveFrom").value;
    const leaveTo = document.getElementById("leaveTo").value;
    const reason = document.getElementById("reason").value.trim();

    if (!studentName || !roomNumber || !leaveFrom || !leaveTo || !reason) {
      showMessage(leaveMessage, "Please complete all leave form fields.", false);
      return;
    }

    if (new Date(leaveTo) < new Date(leaveFrom)) {
      showMessage(leaveMessage, "Leave To date must be after Leave From date.", false);
      return;
    }

    showMessage(leaveMessage, `Leave request submitted successfully for ${studentName}.`, true);
    leaveForm.reset();
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email.endsWith("@student.edu")) {
      showMessage(loginMessage, "Use your college email ending with @student.edu.", false);
      return;
    }

    if (password.length < 6) {
      showMessage(loginMessage, "Password should be at least 6 characters.", false);
      return;
    }

    showMessage(loginMessage, "Login successful. Welcome to the hostel portal.", true);
    loginForm.reset();
  });
})();
