/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const rolesRequired = this.reflector.get<string[]>(
      "roles",
      context.getHandler(),
    );

    console.log("Roles Required:", rolesRequired);

    // a ideia é verificar se o role que o usuario tem é o mesmo que o role que está sendo passado no decorator.
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log("User Role:", user.role);

    return rolesRequired.includes(user.role);
  }
}
