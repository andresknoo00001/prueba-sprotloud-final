document.getElementById('registroForm').addEventListener('submit', function(event) {
    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    var password = passwordInput.value;
  
    if (password.length < 8) {
      passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
      event.preventDefault();
      return;
    }
  
    if (!/[A-Z]/.test(password)) {
      passwordError.textContent = 'La contraseña debe contener al menos una mayúscula';
      event.preventDefault();
      return;
    }
  
    if (!/[\W_]/.test(password)) {
      passwordError.textContent = 'La contraseña debe contener al menos un carácter especial';
      event.preventDefault();
      return;
    }
  
    // Si todas las validaciones pasan, envía el formulario
  });
  