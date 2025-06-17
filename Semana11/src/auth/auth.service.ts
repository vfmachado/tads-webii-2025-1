/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async signIn(loginDto: any): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    // TODO - UTILIZAR O BCRYPT PARA VERIFICAR A SENHA
    if (user?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }

    const payload = {
      // user,
      sub: user.id,
      name: user.name,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
