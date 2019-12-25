const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la Tarea por Hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}