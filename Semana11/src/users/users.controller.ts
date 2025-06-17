import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { RoleGuard } from "src/guards/role.guard";
import { Roles } from "src/guards/role.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(RoleGuard)
  @Roles(...["admin", "gerente", "tecnico"]) // TODO PENSAR EM ALGO COMO @RoleGuard("admin", "gerente", "tecnico")
  @UseGuards(AuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  // @RolesGuard("admin") // Verifica se o usuário é admin
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
