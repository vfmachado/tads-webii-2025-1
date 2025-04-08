const isAdmin = (req, res, next) => {
    if (req.session.isAuth && req.session.user.role == 'ADMIN') return next();

    res.send("NAO AUTENTICADO");
}

module.exports = isAdmin;