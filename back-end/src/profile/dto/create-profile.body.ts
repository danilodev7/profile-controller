import { IsString, IsNotEmpty, IsPhoneNumber, Length, IsEmail, IsBoolean } from "class-validator";import { Init } from "node:v8";
import { ApiProperty } from "@nestjs/swagger";

//CLASSE QUE DEFINE O CORPO DO OBJETO DE CRIAÇÃO DE PERFIL
export class CreateProfileBody {

    //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO NOME

    @ApiProperty(
        {
            type: String,
            description: 'Nome do profisisonal Obrigatório e deve no minimo 3 e no máximo 25 caracteres.',
            required: true,
            title: 'Nome',
            minLength: 3,
            maxLength: 25,
            example: 'João da Silva'
        }
    )
    @IsString()
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    @Length(3, 25, { message: 'Nome deve ter entre 3 e 25 caracteres' })
    nome: string;

   //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO TELEFONE
    
   @ApiProperty(
        {
            type: String,
            description: 'Telefone do profissional, não é obrigatório.',
            required: false,
            title: 'Telefone',
            example: '+55 (11) 9 9999-9999'
        }
    )
    @IsPhoneNumber('BR', { message: 'Telefone inválido' }) //DECORATOR QUE VALIDA SE O TELEFONE É UM NÚMERO VÁLIDO
    telefone: string; //TIPO DE DADO STRING

    //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO EMAIL

   @ApiProperty(
        {
            type: String,
            description: 'E-mail é um campo * obrigatório * e não é permito ter o mesmo email vinculado a mais de um usúario.',
            required: true,
            title: 'Email',
            example: 'email@email.com'
        }
    )

    @IsEmail({}, { message: 'Email inválido' }) //DECORATOR QUE VALIDA SE O EMAIL É UM EMAIL VÁLIDO
    email: string; //TIPO DE DADO STRING

    //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO TIPO DE PROFISSIONAL

    @ApiProperty(
        {
            type: String,
            description: 'Tipo de Profissional é um campo * obrigatório * e deve ser preenchido com a função do profissional.',
            required: true,
            title: 'Tipo de Profissional',
            minLength: 3,
            maxLength: 25,
            example: 'Desenvolvedor Fullstack'
        }
    )

    @IsString() //DECORATOR QUE VALIDA SE O TIPO DE PROFISSIONAL É UMA STRING
    @IsNotEmpty({ message: 'O campo é obrigatório' }) //DECORATOR QUE VALIDA SE O CAMPO NÃO ESTÁ VAZIO
    @Length(3, 25, { message: 'Tipo de Profissional deve entre 3 e 25 caracteres' }) //DECORATOR QUE VALIDA SE O TIPO DE PROFISSIONAL TEM ENTRE 3 E 25 CARACTERES
    tipoDeProfissional: string; //TIPO DE DADO STRING

    //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO DESCRIÇÃO

    @ApiProperty(
        {
            type: String,
            description: 'Descrição do profissional é um campo * obrigatório * e deve ser preenchido com uma breve descrição da função do profissional.',
            required: true,
            title: 'Descrição',
            minLength: 13,
            maxLength: 225,
            example: 'Desenvolvedor responsável pela criação de aplicações web e mobile.'
        }
    )

    @IsString() //DECORATOR QUE VALIDA SE A DESCRIÇÃO É UMA STRING
    @IsNotEmpty({ message: 'O campo é obrigatório' }) //DECORATOR QUE VALIDA SE O CAMPO NÃO ESTÁ VAZIO
    @Length(13, 225, { message: 'A descrição deve entre 13 e 225 caracteres' }) //DECORATOR QUE VALIDA SE A DESCRIÇÃO TEM ENTRE 13 E 225 CARACTERES
    descricao:  string; //TIPO DE DADO STRING

    //API PROPERTY - DECORATOR QUE DEFINE AS PROPRIEDADES DE UM OBJETO TIPO SITUAÇÃO

    @ApiProperty(
        {
            type: Boolean,
            description: 'A situação do profissional é um campo * obrigatório * tipo * booleano * e deve ser preenchido com true ou false.',
            required: true,
            title: 'Situação',
            example: 'true'
        }
    )

    @IsBoolean() //DECORATOR QUE VALIDA SE A SITUAÇÃO É UM BOOLEANO
    @IsNotEmpty({ message: 'O campo é obrigatório' }) //DECORATOR QUE VALIDA SE O CAMPO NÃO ESTÁ VAZIO
    situacao: boolean; //TIPO DE DADO BOOLEANO


}
