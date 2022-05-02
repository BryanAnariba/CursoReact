console.log( 'hello i am javscript code' );

// VARIABLES
let firstName = 'Bryan Ariel'; // se permite reasignar valores  dependiendo del scope
const lastName = 'Sanchez Anariba'; // el valor no cambia
var isDeveloper = true; // Se reasigna el valor sin importar el scope CUIDADO CON ESO POR ESO NO SE USA
console.log( 'First Name in Upper: ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase() );

// OBJECTS
const employees = [];
const employee = { // LOS ARRAYS SON MUTABLES, LAS VARIABLES NO
    firstName: 'Erick David',
    lastName: 'Jimenez Anariba',
    age: 20,
    role: 'Developer',
    isActive: true,
    links: [{
        twitter: null,
        linkedin: null,
        facebook: 'https://facebook.com/erickjimenez15'
    }],
};
const employeesList = [ 
    ...employees,
    employee
];

console.log( { employees: employeesList } );

// FUNCTIONS => classic and arrow function
function getNameOptions ( option, completeName = '' ) {
    switch ( option ) {
        case option = 'upper':
            return completeName.toUpperCase();
        case option = 'lower':
            return completeName.toLowerCase();
        default:
            return completeName.trim();
    }
}

const getNameWithOptions = ( option, completeName ) => {
    switch ( option ) {
        case option = 'upper':
            return completeName.toUpperCase();
        case option = 'lower':
            return completeName.toLowerCase();
        default:
            return completeName.trim();
    }
}

console.log( getNameOptions( 'upper', 'cristiano ronaldo el bicho' ) );
console.log( getNameWithOptions( 'lower', 'ARIEL SANCHEZ' ) );
