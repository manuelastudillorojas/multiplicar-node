const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

createArchivoSuma = (base) => {
    return new Promise((resolve, rejects) => {
        if (!Number()) {
            rejects('No es  número');
            return;
        }
        let data = '';
        for (let i = 1; i < 11; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    createArchivoSuma
}