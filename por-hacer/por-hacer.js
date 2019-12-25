const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar bien el archivo', err);
    });
}

const cargardb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {

    cargardb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargardb();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargardb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargardb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}