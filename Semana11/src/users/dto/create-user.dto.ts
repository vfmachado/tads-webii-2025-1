// DATA TRANSFER OBJECT
// object that defines the shape of data sent to the server
// and received from the server
export class CreateUserDto {
  email: string;
  password: string;
  name: string;
}
