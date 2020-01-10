//required
const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite = 10) => {

    console.log('hello'.green);


    for (let i = 1; i <= limite; i++) {
        suma = base * i;
        console.log(`${base} * ${i} = ${suma}`)
    }


}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            suma = base * i;
            data += `${base} * ${i} = ${suma}\n`;
        }

        //const data = new Uint8Array(Buffer.from('hola mundo'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limite}.txt`) //manda el nombre del archivo
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}