import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  controllers: [UsersController],
  providers: [JwtService, UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
