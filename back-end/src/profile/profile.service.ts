import { Injectable } from '@nestjs/common';
import { CreateProfileBody } from './dto/create-profile.body';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  create(CreateProfileBody: CreateProfileBody) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile`;
  }

  findUnique(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  delete(id: number) {
    return `This action removes a #${id} profile`;
  }
}
