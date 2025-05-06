// REGISTRAZIONE
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[username]) {
      alert("Username già esistente!");
      return;
    }
  
    users[username] = { password };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrazione completata!");
    this.reset();
  });
  
  // LOGIN
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[username] && users[username].password === password) {
      alert("Login riuscito!");
      localStorage.setItem("loggedInUser", username);
      // Redirect o logica successiva qui
    } else {
      alert("Credenziali errate!");
    }
  });
  