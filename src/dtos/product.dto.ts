import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
  
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// export class UpdateProductDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly price?: number;
//   readonly stock?: number;
//   readonly image?: string;
// }

export class UpdateProductDto extends PartialType(CreateProductDto) {}