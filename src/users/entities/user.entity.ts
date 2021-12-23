import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  constructor(
    user_id: string,
    description: string,
    user_passport_name: string,
  ) {
    this.user_id = user_id ?? '';
    this.description = description ?? '';
    this.user_passport_name = user_passport_name ?? '';
  }

  @Field({ nullable: false })
  user_id: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  user_passport_name: string;

  @Field({ nullable: false })
  user_name: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  phone: string;

  @Field({ nullable: false })
  language: string;

  @Field({ nullable: false })
  ratings: Rating;

  @Field({ nullable: false })
  payment_info: PaymentInfo[];

  @Field({ nullable: false })
  createdAt: string;

  @Field({ nullable: false })
  updatedAt: string;
}

class Rating {
  @Field()
  average: number;

  @Field()
  rating: number;

  @Field()
  divide: number;

  @Field()
  ratings_count: number;
}

class PaymentInfo {
  @Field()
  credit_no: string;

  @Field()
  expired: string;

  @Field()
  cvv: string;

  @Field()
  credit_name: string;

  @Field()
  check_condition: string;
}
