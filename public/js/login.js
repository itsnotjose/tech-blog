const login = document.getElementById('login-form')
console.log(login);
const loginFormHandler = async (event) => {
    
    event.preventDefault();
  console.log('login successful')
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email);
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
    login.addEventListener('submit', loginFormHandler);
  