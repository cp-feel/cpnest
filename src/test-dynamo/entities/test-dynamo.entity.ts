import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { last } from 'rxjs';

@ObjectType()
export class TestDynamo {
  constructor(id: string, lastName?: string, firstName?: string) {
    this.id = parseInt(id);
    this.firstName = firstName ?? '';
    this.lastName = lastName ?? '';
  }

  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string = '';

  @Field({ nullable: true })
  lastName?: string = '';
}
