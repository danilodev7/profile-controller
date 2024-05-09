import styled from 'styled-components';
import axios from 'axios';
import { FaTrash, FaEdit, FaInfo } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { format, parseISO, set } from 'date-fns';
import UserInfoModal from './UserInfoModal';
import React, { useState } from 'react';

//POR PRATICIDADE, VAMOS UTILIZAR O STYLED COMPONENTS PARA 
//ESTILIZAR NOSSOS COMPONENTES DIRETO NO ARQUIVO

//ESTILIZAÇÃO DO COMPONENTE TABLE
const Table = styled.table`
    width: 100%;
    max-width: 1200px;
    border-collapse: collapse;
    background-color: #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 20px auto;
    padding: 20px;
    word-break: break-word;
    overflow: hidden;
`;

//ESTILIZAÇÃO DO COMPONENTE THEAD
export const Thead = styled.thead`
    background-color: #333;
    color: #fff;
    display: table-row-group;
    height: 60px;
`;

//ESTILIZAÇÃO DO COMPONENTE TBODY
export const Tbody = styled.tbody`
    background-color: #fff;
    color: #333;
    max-width: 1200px;
    max-height: 600px;
    overflow: auto;
`;

//ESTILIZAÇÃO DO COMPONENTE TR
export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

//ESTILIZAÇÃO DOS COMPONENTES TH E TD
export const Th = styled.th<{ onlyWeb?: boolean }>`
    text-align: center;
    border-bottom: inset;
    padding: 17px 9px;
    margin: 0 auto;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none;"}
    }
    
`;
//ESTILIZAÇÃO DO COMPONENTE TD
export const Td = styled.td<{ alignCenter?: boolean; width?: string; onlyWeb?: boolean }>`
    padding-top: 20px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

     @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none;"}
    }
`;

//INTERFACE QUE DEFINE O FORMATO DE UM USUÁRIO
interface User {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    tipoDeProfissional: string;
    descricao: string;
    situacao: boolean;
    createdAt: string;
    updatedAt: string;
}

//COMPONENTE GRID
const Grid = ({ users, setUsers, setOnEdit }: { users: any[]; setUsers: React.Dispatch<React.SetStateAction<any[]>>; setOnEdit: React.Dispatch<React.SetStateAction<any>> }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id: string) => {
        await axios
            .delete(`http://localhost:3000/profile/${id}`)
            .then(() => {
                const newArray = users.filter((user) => user.id !== id);
                setUsers(newArray);
                toast.success("Usuário excluído com sucesso!");

            })
            .catch((error) => toast.error(error as string));
        setOnEdit(null);
        };    

        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedUser, setSelectedUser] = useState<User | null>(null);

        const handleInfo = (item: User) => {
            setSelectedUser(item);
            setModalIsOpen(true);
        }

        const closeModal = () => {
            setModalIsOpen(false);
        }
        


    return (
        <Table>
            <UserInfoModal
                user={selectedUser}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
            <Thead>
                <Tr>
                   <Th>Nome</Th>
                   {/* <Th>Telefone</Th>
                   <Th>E-mail</Th> */}
                   <Th>Tipo</Th>
                   {/* <Th onlyWeb>Descrição</Th> */}
                   <Th>Situação</Th>
                   <Th>Cadastro</Th>
                   <Th>Atualização</Th>
                   <Th></Th>
                   <Th></Th>
                   <Th></Th>
                </Tr>
            </Thead>

            <Tbody>

                {/*MAPEANDO OS USUÁRIOS E EXIBINDO OS DADOS NA TABELA */}
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="15%" style={{ paddingLeft: '10px' }}>{item.nome}</Td>
                        {/* <Td width="10%">{item.telefone}</Td>
                        <Td width="10%">{item.email}</Td> */}
                        <Td width="15%">{item.tipoDeProfissional}</Td>
                        {/* <Td width="20%">{item.descricao}</Td> */}
                        <Td width="10%" style={{ textAlign: 'center' }}>{item.situacao ? 'Ativo' : 'Desativado'}</Td>                        <Td width="10%">{format(parseISO(item.createdAt), 'dd/MM/yy')}</Td>
                        <Td width="10%">{format(parseISO(item.updatedAt), 'dd/MM/yy')}</Td>

                        {/*BOTÃO DE INFORMAÇÃO */}
                        <Td alignCenter width="5%">
                            <FaInfo
                                style={{ cursor: "pointer" }}
                                onClick={() => handleInfo(item)}
                            />
                        </Td>
                        
                        {/*BOTÕES DE EDIÇÃO E EXCLUSÃO */}
                        <Td alignCenter width="5%">
                            <FaEdit
                            style={{ cursor: "pointer" }}
                            onClick={() => handleEdit(item)}
                            />
                        </Td>

                        <Td alignCenter width="5%">
                            <FaTrash
                                style={{ cursor: "pointer" }}
                                onClick={() => handleDelete(item.id)}
                            />
                            </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        
    );
};

export default Grid;