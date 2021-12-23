import { ObjectType, Field, Int } from '@nestjs/graphql';

export interface Rating {
  average: number;
  rating: number;
  divide: number;
  ratings_count: number;
}

export interface PaymentInfo {
  credit_no: string;
  expired: string;
  cvv: string;
  credit_name: string;
  check_condition: string;
}
@ObjectType()
export class User {
  // constructor(
  //   user_id: string,
  //   description: string,
  //   user_passport_name: string,
  // ) {
  //   this.user_id = user_id ?? '';
  //   this.description = description ?? '';
  //   this.user_passport_name = user_passport_name ?? '';
  // }

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

  // @Field({ nullable: false })
  // ratings: Rating;

  // @Field({ nullable: false })
  // payment_info: [PaymentInfo];

  @Field({ nullable: false })
  createdAt: string;

  @Field({ nullable: false })
  updatedAt: string;
}
