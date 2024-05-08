import { PartialType } from '@nestjs/swagger';
import { CreateProfileBody } from './create-profile.body';

export class UpdateProfileDto extends PartialType(CreateProfileBody) {}
