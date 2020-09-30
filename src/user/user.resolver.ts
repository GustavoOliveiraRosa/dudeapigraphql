import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ArrayMinSize } from 'class-validator';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
constructor(
    private userService: UserService
){}

@Query(() => [User])
async users(): Promise<User[]>{
    const users = await this.userService.findAllUsers();
    return users;
}


@Mutation(() => User)
async createUser(
    @Args("data") data: CreateUserInput

): Promise<User> {
    const user = await this.userService.createUser(data)
    return user;
}




}
