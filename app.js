//1)llamo a la funciónDeTareas. Guardo el array de tareas en una variable
//const { leerArchivo } = require('./funcionDeTareas')
let funcionTareas = require('./funcionDeTareas')

//2) guardo input de la terminal en una variable. 
//Con process.argv el 1er arg es node, el 2do el nombre del archivo a ejecutar, 
//el 3ero el valor que vos le pongas que puede ser una acción, el 4to puede ser un valor por ejemplo o lo que quieras
let inputArg2 = process.argv[2] //accion
let inputArg3 = process.argv[3] //parámetro para ejecutar la acción: puede ser una tarea nueva o un estado

//3) Hago un switch con los escenarios

    switch (inputArg2){
        case undefined:
            console.log("Tienes que pasar una acción.")
            break
        case "listar":
            funcionTareas.listar()
            break
       case "crear":
            let tarea = {titulo: inputArg3, estado: "pendiente"};
            funcionTareas.guardarTareas(tarea);
            //console.log(funcionTareas.listar()); 
            funcionTareas.listar();
            break;
        case "filtrar": //deberíamos ver el array de tareas filtrado
            let tareasFiltradas = funcionTareas.filtrarTareas(inputArg3);
            console.log('Tareas con estado: '+ inputArg3)
            console.log('------------------------------')
            tareasFiltradas.forEach((tarea,i)=> {
                console.log((i+1)+". "+ tarea.titulo)
            })
            break;
        case "borrar":
            let tareaBorrada = funcionTareas.borrarTarea(inputArg3);
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
            break;
    }

    /*Consigna Clase 2
        1)Crear una nueva tarea y guardarla. Guardar nueva tarea. Usar .push al array de tareas
        2)Generar un nuevo case que ejecute el filtrado con la palabra clave filtrar
    */