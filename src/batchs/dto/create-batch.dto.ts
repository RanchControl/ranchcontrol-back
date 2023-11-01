import { Batch } from '../entities/batch.entity';

export class CreateBatchDto implements Batch {
  name?: string;
  wheightAverage: number;
  animalQuantity: number;
  earringStartNumber: number;
  breed: string;
  age: number;
  bornDate: Date;
  observation?: string;
  situation: string;
  enclosureId: number;
}
