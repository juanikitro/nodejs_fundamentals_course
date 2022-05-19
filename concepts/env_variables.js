// envVariable needs to be set or it will be 'doenst exist'
let envVariable = process.env.ENVVARIABLE || 'doesnt exist';

console.log('La variable definida fue: ' + envVariable);

// In the console you need to set the ENVVARIABLE=value
// Like: ENVVARIABLE='Hi!' nodemon env_variables.js
