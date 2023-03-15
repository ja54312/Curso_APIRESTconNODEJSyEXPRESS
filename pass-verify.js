const bcrypt = require('bcrypt');

async function verifyPassword (){
    const myPassword = 'admin 123 .504';
    const hash = '$2b$10$HvesIzKEytruvng26l8NPel5E6rytvin0/5UhvnK.d21Q2FxjM6Li'
    const comparation = await bcrypt.compare(myPassword,hash);
    console.log(comparation)
}

verifyPassword()
