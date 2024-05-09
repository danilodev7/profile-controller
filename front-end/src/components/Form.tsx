import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled  from 'styled-components';
import { toast } from 'react-toastify';
import { MdWarning } from 'react-icons/md';
import InputMask from 'react-input-mask';


//ESTILIZAÇÃO DO COMPONENTE FORMCONTAINER
const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    background-color: #fff;
    padding: 29px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;`;

//ESTILIZAÇÃO DO COMPONENTE INPUTAREA
const InputArea = styled.div`
    display: flex;
    flex-direction: column;
   `;

   //ESTILIZAÇÃO DO COMPONENTE INPUTAREAROW
const InputAreaRow = styled.div`
    display: flex;
    width: 40%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 0 10px 0;
    gap: 20px;
    align-content: flex-start;

  `;

  //ESTILIZAÇÃO DO COMPONENTE INPUTTEXTAREA
const InputTextArea = styled.div`
    display: flex;
    width: 50%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 0 10px 0;
    gap: 20px;
    align-content: flex-start;
    `;


  //ESTILIZAÇÃO DO COMPONENTE INPUT
const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
    `;

    const StyledInputMask = styled(InputMask)`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
`;
    
//ESTILIZAÇÃO DO COMPONENTE INPUTCHECKBOX
const InputAreaRowCheckbox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    padding: 10px 34px;
    gap: 20px;
  `;

const InputCheckbox = styled.input`
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
height: 20px;
width: 20px;
    `;

//ESTILIZAÇÃO DO COMPONENTE LABEL
const Label = styled.label``;

//ESTILIZAÇÃO DO COMPONENTE BUTTON
const Button = styled.button`
    width: 94%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
        background-color: #0056b3;
    }
    `;
    

    //COMPONENTE FORM
type FormProps = {
    getUsers: () => void;
    onEdit: any; // Replace 'any' with the appropriate type
    setOnEdit: (value: any) => void; // Replace 'any' with the appropriate type
};

const Form = ({ getUsers, onEdit, setOnEdit }: FormProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [telefone, setTelefone] = useState("");
  
    {/* FUNÇÃO PARA TRATAR O ENVIO DO FORMULÁRIO */}

    const ref = useRef<{ nome: HTMLInputElement; telefone: HTMLInputElement; email: HTMLInputElement; tipoDeProfissional: HTMLInputElement; descricao: HTMLInputElement; situacao: HTMLInputElement }>(null);
    useEffect(() => {
        if (onEdit) {
            const user = ref.current as unknown as HTMLFormElement;
            if (user) {
                user.nome.value = onEdit.nome;
                user.telefone.value = onEdit.telefone;
                user.email.value = onEdit.email;
                user.tipoDeProfissional.value = onEdit.tipoDeProfissional;
                user.descricao.value = onEdit.descricao;
                user.situacao.checked = onEdit.situacao;
            }
        }
    }, [onEdit]);

    //FUNÇÃO PARA TRATAR O ENVIO DO FORMULÁRIO
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;
        
        if (!user) {
            return toast.warn("Referência indefinida!");
        }
        
        if (!user.nome.value || !user.telefone.value || !user.email.value || !user.tipoDeProfissional.value || !user.descricao.value) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios.patch(`http://localhost:3000/profile/${onEdit.id}`, {
                nome: user.nome.value,
                telefone: user.telefone.value,
                email: user.email.value,
                tipoDeProfissional: user.tipoDeProfissional.value,
                descricao: user.descricao.value,
                situacao: user.situacao.checked,
            })
                .then(() => {
                    toast.success("Usuário editado com sucesso!");
                })
                .catch(() => toast.error("Erro ao editar usuário!"));
        } else {
            await axios.post("http://localhost:3000/profile", {
                nome: user.nome.value,
                telefone: user.telefone.value,
                email: user.email.value,
                tipoDeProfissional: user.tipoDeProfissional.value,
                descricao: user.descricao.value,
                situacao: user.situacao.checked,
            })
                .then(() => {
                    toast.success("Usuário cadastrado com sucesso!");
                })
                .catch(() => toast.error("Erro ao cadastrar usuário!"));
        }

        user.nome.value = "";
        user.telefone.value = "";
        user.email.value = "";
        user.tipoDeProfissional.value = "";
        user.descricao.value = "";
        user.situacao.checked = false;

        setOnEdit(null);
        setTelefone("");
        getUsers();
    };

  return (

    //RETORNO DO COMPONENTE FORM
    <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
            <Label>Nome: <span style={{ color: 'red' }}>*</span></Label>
            <Input name="nome" placeholder="Nome do profisisonal" required/>
        </InputArea>

        <InputArea>
    <Label>Telefone:</Label>
    <StyledInputMask 
    mask="+55 99 999999999" 
    maskChar={null} 
    alwaysShowMask={false}
    name="telefone"
    value={telefone}
    onChange={e => setTelefone(e.target.value)}
    placeholder="+55 99 999999999"
    />
    </InputArea>

        <InputArea>
            <Label>E-mail:</Label>
            <Input name="email" type="email" placeholder="Endereço de e-mail do profissional"/>
        </InputArea>

        <InputAreaRow>
            <Label>Tipo de Profissional: <span style={{ color: 'red' }}>*</span></Label>
            <Input name="tipoDeProfissional" placeholder="Vinculo com o tipo de profissional" required/>
        </InputAreaRow>

        <InputTextArea>
            <Label>Descrição: <span style={{ color: 'red' }}>*</span></Label>
            <Input name="descricao" placeholder="Descricão do tipo de Profissional" required/>
        </InputTextArea>

        <InputAreaRowCheckbox>
            <Label>Situação: <span style={{ color: 'red' }}>*</span></Label>
            <InputCheckbox 
        name="situacao" 
        type="checkbox" 
        onChange={(event) => {
            setIsChecked(event.target.checked);
            if (event.target.checked) {
                toast.warn('Situação ativa selecionada');
            } else {
                toast.warn('Situação inativa');
            }
        }}
        required
    />
    {!isChecked && <span><MdWarning size={18} style={{ verticalAlign: 'middle' }}/> Situação inativa</span>}
        </InputAreaRowCheckbox>

        <Button type="submit">Salvar</Button>
    </FormContainer>
  )
}

export default Form;