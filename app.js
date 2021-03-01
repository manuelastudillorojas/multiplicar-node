const argv = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//let base = '12';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(error => (console.log(error)));
        break;
    default:
        console.log('No Existe');
}


//let parametro = argv[2];
//let base = parametro.split('=')[1]


/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
    .catch(error => (console.log(error)));*/