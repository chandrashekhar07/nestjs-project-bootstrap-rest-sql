import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger, type PassengerInput } from '../model';

@Injectable()
export class PassengerService {
    public constructor(
        @InjectRepository(Passenger)
        private readonly passengerRepository: Repository<Passenger>,
    ) {}

    public async find(): Promise<Passenger[]> {
        return this.passengerRepository.find();
    }

    public async create(input: PassengerInput): Promise<Passenger> {
        return this.passengerRepository.save({ ...input });
    }
}
