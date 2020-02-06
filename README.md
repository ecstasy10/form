# Registro y Login form con cookies

## Se recomienda el uso de Firefox para este formulario

La página web consta de dos formularios, uno para registrarse y otro para login.

### Formulario registro
Recoje los siguientes campos

  - Name, será obligatorio escribir un nombre con letras.
  - Surname, obligatorio, solo podremos introducir letras.
  - Contacto, obligatorio, podremos crear un usuario mediante eMail o Teléfono.
  - Contraseña, obligatoria, debe contener una mayusucla, una minuscula, un numero al menos y 8 caracteres minimo de longitud.
  - Confirmar contraseña, obligatorio, para mayor seguridad al crear la contraseña.
  - Año nacimiento, opcional.

### Formulario Login
Recoje los siguientes campos

  - Contacto, será obligatorio (eMail / Teléfono).
  - Contraseña, obligatoria.

## Cookies
Para la implementación de las cookies he creado el siguiente modelo:
  
  - Cuando se crea el usuario, se crearán 2 cookies. Estas contendran el contacto (Email/Telefono) y la contraseña.
  - Cuando se logea el usuario en el formulario de login, se crean otras 2 cookies para esa sesión creada, las cuales durarán 1 hora.
  - Si el usuario se ha autentificado correctamente, tendrá la opción de un botón de Logout el cual cerrará la session y eliminará las cookies creadas.
  - Si el usuario no presiona el boton de Logout pero cierra esa pestaña y se vuelve a logear en menos de 1 hora, seguirá autentificado.
  - Por defecto las cookies se borran al cerrar el navegador.


_Si se activa la consola se puede ver todo el procedimiento de las cookies._

## Tests Manuales Probados

Prueba introducir datos vacios _Formulario Registro_:
  - Si intentamos validar con algún campo vacío nos pedirá que rellenemos cada uno de los campos vacios.
  - Al clickear sobre el campo de contraseña, nos saldrá un mensaje de alerta para enseñarnos si la contraseña cumple todos los requisitos, en caso de no ser así, no nos dejará validar.
  
Prueba introducir datos erroneos _Formulario Registro_:
   - Name: En el caso de que introduzcamos cualquier caracter que no sean letras, no nos dejará validar. También se contempla la Ñ y ñ. Mínimo 1 y Máximo 32 caracteres.
   - Surname: En el caso de que introduzcamos cualquier caracter que no sean letras, no nos dejará validar. También se contempla la Ñ y ñ. Mínimo 1 y Máximo 32 caracteres.
   - Contact: Podremos introducir un número de telefono de 9 digitos obligatorios o, un correo electrónico, en el caso de que el correo no tenga '@' y '.' no nos dejará validar el formulario.
   - Password: En el caso de que no se complete el formato solicitado (1 letra minuscula al menos, 1 letra mayuscula al menos, 1 número al menos, 8 caracteres mínimo, las dos contraseñas deben ser iguales), no nos dejará validar el formulario.
   - ConfirmPassword: Sigue las mismas directrices que el campo password. Ambos campos deben estar rellenos exactamente igual.
   - Birth Date: Solo se puede insertar fechas mediante el objeto HTML, por lo tanto no hay fallo.
  
Prueba introducir datos erroneos _Formulario Login_:
   - Email-Phone: Siguen las mismas directrices que el campo de contacto del formulario de registro. En el caso de que se introduzca un contacto que no exista en la cookie, nos mostrará un mensaje de alerta en rojo, informándonos de que no se ha podido logear el usuario o que no existe.
   - Password: Sigue las mismas directrices que el campo de Password del formulario de registro. Buscará si la cookie almacenada con la contraseña contiene el mismo nombre, en caso de no ser así, mostrará el mensaje de alerta rojo.
  
Prueba campos vacios en el _Formulario Login_:
  - Si introducimos un usuario en blanco, nos saldrá un pop-up que nos pedirá rellenarlo para poder continuar.
  - Si no introducimos contraseña al validar nos saldrá un mensaje de error.
  
