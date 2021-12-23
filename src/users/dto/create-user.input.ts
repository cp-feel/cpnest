import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
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
  credit_no: string;
  expired: string;
  cvv: string;
  credit_name: string;
  check_condition: string;
}
@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  user_id: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  user_passport_name: string;

  @Field({ nullable: false })
  user_name: string;

  // @Field({ nullable: false })
  // email: string;

  // @Field({ nullable: false })
  // phone: string;

  // @Field({ nullable: false })
  // language: string;

  // @Field((type) => Rating)
  // ratings: Rating;

  // @Field()
  // payment_info: [PaymentInfo];

  // @Field()
  // createdAt: string;

  // @Field()
  // updatedAt: string;
}
