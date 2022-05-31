//importo método nativo de node
const fs = require('fs')

//declaro una supervariable con una propiedad: nombre del archivo y una función: leerArchivo
let funcionTareas = {
    archivo: 'tareas.json',
    //declaro la función para leer el archivo
    leerArchivo: function (){
        //leo archivo json, pero sigue en formato json
        let archivoTareas = fs.readFileSync('./tareas.json', 'utf-8')
        // le damos formato que pueda interpretar java: array
        let arrayTareas = JSON.parse(archivoTareas)
        return arrayTareas
},
    listar: function(){
        //En el caso de asignación implícita, this hace referencia al objeto, 
        //que contenía el método donde se invoca this
        let tareas =  this.leerArchivo()
        tareas.forEach(function(array,i){
        console.log((1 + i) + ". " + array.titulo + " - " + array.estado)
        })
},
    escribirJON: function(tareas){
        let stringJson = JSON.stringify(tareas)//hay que escribir el json con writefile}
        fs.writeFileSync('./tareas.json',stringJson)
},
    guardarTareas: function(nuevaTarea){//guadar la nueva tarea en el Json
        let arrayTareas =  this.leerArchivo()
        arrayTareas.push(nuevaTarea)  //{titulo: inputTarea, estado: "pendiente"}
        this.escribirJON(arrayTareas)
},
    filtrarTareas: function(inputEstado){
        let arrayTareas =  this.leerArchivo()
        tareasFiltradas = arrayTareas.filter(function(tarea){
        return tarea.estado == inputEstado})
        return tareasFiltradas
},
    borrarTarea: function(TareaB){
        let arrayTareas =  this.leerArchivo()
        let indexTB = -1
        arrayTareas.forEach(function(array,i){
            array.titulo == TareaB? indexTB = i :""})
        switch(indexTB){
            case -1:
                 console.log('No existe esa tarea');
                 break;
            default:
                arrayTareas.splice(indexTB,1)
                this.escribirJON(arrayTareas)
                funcionTareas.listar()
                break;}
        }
}

module.exports = funcionTareas