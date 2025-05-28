export class Game {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    coverUrl: string;
    publisher: string;
    developer: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(
        id: number,
        title: string,
        description: string,
        coverUrl: string,
        publisher: string,
        developer: string,
        releaseDate: Date,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.coverUrl = coverUrl;
        this.publisher = publisher;
        this.developer = developer;
        this.releaseDate = releaseDate;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }
}
