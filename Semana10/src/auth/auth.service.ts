import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  async signIn(loginDto: any): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(loginDto.email);
    // if (user?.password !== pass) {
    //  throw new UnauthorizedException();
    // }
    // const payload = { sub: user.userId, username: user.username };
    const payload = {
        user,
        sub: '1',
        username: "vini",
        role: "admin"
    }
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}