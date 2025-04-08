ROLE BASED AUTHORIZATION
    - a nivel de papel de usuário eu indicar quais sao as permissoes / acessos permitidos.

    lista de todos usuarios
    /users      (basta estar autenticado)

    post    (criacao de usuarios)
    /users      (todo mundo pode criar, sem estar logado)

    deletar usuario
    delete /users       somente administradores podem executar esse tipo de ação.
