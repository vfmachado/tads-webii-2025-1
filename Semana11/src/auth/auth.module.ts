import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";
import { PrismaService } from "src/prisma.service";

@Module({
  // secret é utilizado para a assinatura do JWT, colocar no env.
  imports: [JwtModule.register({ secret: "hard!to-guess_secret" })],
  providers: [AuthService, UsersService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
