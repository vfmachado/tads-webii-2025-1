import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {
    // Transformando a string (yyyy-mm-dd) de data em objeto Date
    createGameDto.releaseDate = new Date(createGameDto.releaseDate);
    return this.prisma.game.create({ data: createGameDto });
  }

  // SERA PAGINADO
  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
