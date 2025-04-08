const isAuth = (req, res, next) => {
    if (req.session.isAuth) return next();

    res.send("NAO AUTENTICADO");
}

module.exports = isAuth;