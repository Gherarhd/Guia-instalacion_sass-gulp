
const {src, dest, series, watch}= require('gulp');
const sass= require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const postcss= require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css(done){

    //Compilar SASS
    // Paso 1 - Identificar archivo, 2 - Compilar, 3 - Guardar el .css

    src('src/scss/app.scss')
    .pipe(plumber())  // Manejar errores con plumber
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css'));
    

done();

}

function dev(){

    watch('src/scss/**/*.scss',css) //escucha por todos los archivos con extension .scss
   watch('src/scss/app.scss',css);


}

// exports.css = css;
// exports.dev = dev;
 exports.default = series(css,dev); // Tarea predeterminada que ejecuta las tareas 'css' y 'dev' en secuencia

//exports.built = series(css, dev); // También podrías crear una tarea 'build' que compila el CSS y observa cambios








// La función series en Gulp se utiliza para ejecutar una serie de tareas de manera secuencial. Al añadir series en la tarea predeterminada, nos aseguramos de que la tarea css se ejecute después de cualquier otra tarea que pueda estar definida en el futuro. Esto es útil si decides expandir tu configuración de Gulp y agregar más tareas.

// Al ejecutar gulp o gulp default, Gulp ejecutará todas las tareas especificadas en la serie en el orden en que se proporcionan. En este caso, solo tenemos la tarea css. Sin embargo, si decides agregar más tareas en el futuro, se ejecutarán en el orden que determines.

// La estructura general de la línea exports.default = series(css); indica que, por defecto, cuando ejecutas gulp sin especificar una tarea, se ejecutará la serie de tareas definida (en este caso, solo css). Esto proporciona flexibilidad para expandir tu configuración de Gulp sin tener que modificar constantemente la tarea predeterminada.


