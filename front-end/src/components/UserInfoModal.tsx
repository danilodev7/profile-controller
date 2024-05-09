import React from 'react';
import Modal from 'react-modal';
import { format, parseISO } from 'date-fns';

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

interface UserInfoModalProps {
    user: User | null;
    isOpen: boolean;
    onRequestClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ user, isOpen, onRequestClose }) => {
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
            contentLabel="User Info"
        >
            {user && (
                <>
                    <h2>Informações do Usuário</h2>
                    <p>Nome: {user.nome}</p>
                    <p>Telefone: {user.telefone}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Tipo: {user.tipoDeProfissional}</p>
                    <p>Descrição: {user.descricao}</p>
                    <p>Situação: {user.situacao ? 'Ativo' : 'Desativado'}</p>
                    <p>Cadastro: {format(parseISO(user.createdAt), 'dd/MM/yy')}</p>
                    <p>Atualização: {format(parseISO(user.updatedAt), 'dd/MM/yy')}</p>
                    <button onClick={onRequestClose}>Fechar</button>
                </>
            )}
        </Modal>
    );

};

export default UserInfoModal;