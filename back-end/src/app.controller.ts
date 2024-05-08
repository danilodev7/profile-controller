import { Body, Controller, Param, Post, Get, Patch, Delete, } from '@nestjs/common';
import { PrismaService } from './db/prisma.service';
import { CreateProfileBody } from './profile/dto/create-profile.body';
import { UpdateProfileDto } from './profile/dto/update-profile.dto';
import {randomUUID} from 'node:crypto'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('API - Profile Controller')
@Controller('profile')

//INVERSÃO DE DEPENDÊNCIA - PRINCIPO SOLID
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  //MÉTODO DE CRIAÇÃO DE PERFIL

  @Post()
  async createProfile(@Body() body: CreateProfileBody) {

    // DESESTRUTURAÇÃO DE OBJETO
    const { nome, telefone, email, tipoDeProfissional, descricao, situacao } = body;
    
    //RETORNA O USUÁRIO CRIADO
    return this.prisma.userProfile.create({
      data: {
        id: randomUUID(),
        nome,
        telefone: telefone.toString(),
        email,
        tipoDeProfissional,
        descricao,
        situacao
      },
    
    });
  }

  //MÉTODO DE BUSCA DE TODOS OS PERFIS

  @Get()
  findAll() {
    return this.prisma.userProfile.findMany();
  }

  //MÉTODO DE BUSCA DE PERFIL POR ID

  @Get(':id')
  findUnique(@Param('id') id: string) {
    return this.prisma.userProfile.findUnique({
      where: { id: id },
    });
  }

  //MÉTODO DE ATUALIZAÇÃO DE PERFIL

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.prisma.userProfile.update({
      where: { id: id },
      data: {
        ...updateProfileDto,
        telefone: { set: updateProfileDto.telefone.toString() },
      },
    });
  }

  //MÉTODO DE DELEÇÃO DE PERFIL
  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.prisma.userProfile.delete({
      where: { id: id },
    });
  }
}
