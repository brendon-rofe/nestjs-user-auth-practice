import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: createUserDto
    })
    return newUser;
  }
}