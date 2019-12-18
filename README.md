# Registro y Login form con cookies

## Se recomienda el uso de Firefox para este formulario

La página web consta de dos formularios, uno para registrarse y otro para login.

### El formulario de registro
Recoje los siguientes campos

  - Name, será obligatorio escribir un nombre con letras.
  - Surname, obligatorio, solo podremos introducir letras.
  - Contacto, obligatorio, podremos crear un usuario mediante eMail o Teléfono.
  - Contraseña, obligatoria, debe contener una mayusucla, una minuscula, un numero al menos y 8 caracteres minimo de longitud.
  - Confirmar contraseña, obligatorio, para mayor seguridad al crear la contraseña.
  - Año nacimiento, opcional.

### El formulario de Login
Recoje los siguientes campos

  - Contacto, será obligatorio (eMail / Teléfono).
  - Contraseña, obligatoria.

## Implementación Cookies
Para la implementación de las cookies he creado el siguiente modelo:
  
  - Cuando se crea el usuario, se crearán 2 cookies. Estas contendran el contacto (Email/Telefono) y la contraseña.
  - Cuando se logea el usuario en el formulario de login, se crean otras 2 cookies para esa sesión creada, las cuales durarán 1 hora.
  - Si el usuario se ha autentificado correctamente, tendrá la opción de un botón de Logout el cual cerrará la session y eliminará las cookies creadas.
  - Si el usuario no presiona el boton de Logout pero cierra esa pestaña y se vuelve a logear en menos de 1 hora, seguirá autentificado.
  - Por defecto las cookies se borran al cerrar el navegador.


Si se activa la consola se puede ver todo el procedimiento de las cookies.
