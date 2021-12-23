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

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  user_name: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  email: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  phone: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  language: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  ratings: Rating;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  payment_info: PaymentInfo[];

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
  createdAt: string;

  @ApiProperty({
    example: '1',
    description: '사용자번호',
  })
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
