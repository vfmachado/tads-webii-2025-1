// aqui vamos mapear com o ORM (prisma) para o banco de dados
export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
