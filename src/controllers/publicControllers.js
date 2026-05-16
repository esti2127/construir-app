/**get Title */


const getTitle = (req, res) => {
    res.send("<h1>Práctica JWT</h1>");
}


/**get API */

const getApi = (req, res) => {

    res.status(200).json({
        posts: [
            {
                id: 0,
                title: "Primer post",
                username: 'Pepe'
            },
            {
                id: 1,
                title: "Segundo post",
                username: 'Ana'
            }
        ]
    })

}



/**get UsuarioInfo */

const getUsuarioInfo = (req, res) => {
    res.render('form', {
        nombre: 'Nombre de Usuario:',
        contraseña: 'Contraseña:'
    });
}


/**get Password */

const getPassword = (req, res) => {
    const { username, password } = req.body;

    res.render('password', {
        password: `Hola de nuevo, ${username}!. Tu contraseña está guardada de manera segura.`
    })

    // const user = { username: username }
}

module.exports = { getTitle, getApi, getUsuarioInfo, getPassword};



