import { ApiProperty } from '@nestjs/swagger';

export class Apiuser {
  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  user_id: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  description: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  user_passport_name: string;

  user_name: string;

  email: string;

  phone: string;

  language: string;

  ratings: Rating;

  payment_info: PaymentInfo[];

  createdAt: string;

  updatedAt: string;
}

class Rating {
  average: number;

  rating: number;

  divide: number;

  ratings_count: number;
}

class PaymentInfo {
  credit_no: string;

  expired: string;

  cvv: string;

  credit_name: string;

  check_condition: string;
}
