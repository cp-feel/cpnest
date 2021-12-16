import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './test_graphQL.service';
import { User } from './entities/test_graphQL.entity';
import { CreateUserInput } from './dto/create-test_graphQL.input';
import { UpdateUserInput } from './dto/update-test_graphQL.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }

  // @Query(() => User, { name: 'users' })
  // findAllTest(@Args('input') input: CreateUserInput) {
  //   return {
  //     id: input.id,
  //     firstName: input.firstName,
  //     lastName: input.lastName,
  //   };
  // }
}
