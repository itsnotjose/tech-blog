const signup = document.getElementById("signup-form");


const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("signup successful");
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();

  console.log(email);
  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

signup.addEventListener("submit", signupFormHandler);
