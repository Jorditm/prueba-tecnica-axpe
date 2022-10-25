# Prueba técnica Axpe Consulting

## Primera parte (parte teórica)

Mi solucion propuesta es la siguiente:
 - En el diagrama de clases he eliminado streamingPrice y downloadPrice de la clase MultimediaContent y añadido price a la clase abstracta Service. de esta forma no es necesario espcificar que tipo de servicio está en uso y si fuera necesario, añadir más Services en un futuro los seguirá añadiendo a las demás siempre que se usen.
 - Aunque las subclases de Service sean "complete", cabe la posibilidad de añadir más servicios en un futuro.
 - La clase MultimediaContent ha pasado a ser una clase abstracta llamada Content donde MultimediaContent es una clase que hereda los atributos de Content y PremiumContent también hereda los atributos de Content añadiendo additionalFee.
 - En el código, llamar uno por uno cada tipo de Service para calcular su "price" provocaba poca escalabilidad del código, al proceder con el primer paso podemos añadir tantos Service como queramos en caso de que sea necesario ya que el metodo "forEach" que empleamos nos proporciona el precio, si el Service está activo y lo suma al total.
 - Una vez creada la clase abstracta Content, si se trata de un PremiumContent y el atributo additionalFee contiene información, el condicional dentro del método forEach creado de cada service leerá este valor, si hay, para poder hacer la suma y añadir ese precio a la variable total.
 - Si se crean otras subclases de Content heredarán todo los atributos y a estas subclases se les puede añadir otras clases, si contienen additionalFee, lo leerá y sumará al total.

[Aquí el código](https://github.com/Jorditm/prueba-tecnica-axpe/blob/feature/requisitos/primera-parte/RegisteredUser.js)

### Cambios en el diagrama
![img](https://github.com/Jorditm/prueba-tecnica-axpe/blob/feature/requisitos/primera-parte/class-diagram.png)

## Segunda parte (parte práctica)

Mi método para llevar a cabo el proyecto ha sido de la siguiente manera:
 - Para el routing del proyecto lo he hecho a través de react-router-dom para poder mostrar la página actual en la URL como solcitan los requisitos.
 - Scrollear genera una animación en la que al scrollear hacía abajo el header se esconde, scrolleando hacía arriba el header aparece. Creado a través del método window.onscroll dónde continuamente leemos la posición de la pantalla y creamos un condicional para que trabaje de una manera u otra.
 - lógica implementada en "añadir favoritos". Al pulsar el botón de "Add to favorites" añade este obejto meetup a un state de tipo array, que posteriormente será leído para visualizar esta array en su página correspondiente.
 - lógica implementada para "borrar favoritos". Al pulsat el botón de "Remove from favorites" activa una función en la cual filtra el meetup que estamos pulsando y crea una array nueva excluyendo el meetup pulsado.
 - lógica implementada en "crear meetups". Al rellenar el formulario guardamos la información de cada campo en un state de tipo objecto con sus correspondientes parámetros. Una vez pulsamos el boton de "Add Meetup" este state de tipo objeto se añade a la array donde contiene todos los meetups, la cual se muestra en la página "All Meetups" y se actualiza cada vez que añadimos un meetup.
 - Al no tener base de datos dónde almacenar favoritos y no editar el documento data.json, se han almacenado los nuevos meetups y los favoritos en localStorage. Así al refrescar página seguimos teniendo los datos disponibles.
 - Burger menu simple implementada para hacer un diseño ligeramente más responsive.


Comentarios en el código para mayor aclaración de los metódos y lógica empleados.

## Para inciar el proyecto

 - Una vez descargado el proyecto, acceder a la carpeta raíz del proyecto a través de la terminal y ejectuar el comando `npm install`.
 - Una vez instaladas todas las dependencias, iniciar el proyecto a través de la terminal con el comando  `npm start`.
 - Se abrirá automáticamente el puerto de desarrollo, en este caso será  [http://localhost:3000](http://localhost:3000).
