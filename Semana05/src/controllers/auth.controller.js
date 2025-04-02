

const authController = {
    login(req, res) {

        const {email , password}  = req.body;
        if (email == "admin" && password == "admin") {
            // LOGADO
            req.session.isAuth = true;
            return res.send("AUTENTICADO")
        }

        res.send("NAO DEU!")
    }
}

module.exports = authController;