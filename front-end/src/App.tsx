import { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-modal';

//POR PRATICIDADE, VAMOS UTILIZAR O STYLED COMPONENTS PARA 
//ESTILIZAR NOSSOS COMPONENTES DIRETO NO ARQUIVO

//ESTILIZAÇÃO DO COMPONENTE CONTAINER
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

//ESTILIZAÇÃO DO COMPONENTE TITLE
const Title = styled.h2``;

Modal.setAppElement('#root'); // #root é o elemento raiz comum

//FUNÇÃO APP - COMPONENTE PRINCIPAL DA NOSSA APLICAÇÃO  
function App() {

  {/* ESTADO PARA ARMAZENAR OS USUÁRIOS CADASTRADOS */}
  const [users, setUsers] = useState([]);

  {/* ESTADO PARA ARMAZENAR O USUÁRIO QUE ESTÁ SENDO EDITADO */}
  const [onEdit, setOnEdit] = useState(null);

  {/* FUNÇÃO PARA BUSCAR OS USUÁRIOS CADASTRADOS NA API BACK END CRIADA NO NESTJS*/}
  const getUsers = async () => {  
    
    try {
      const res = await axios.get("http://localhost:3000/profile"); //REQUISIÇÃO GET PARA A ROTA /PROFILE
      setUsers(res.data.sort((a: any, b: any) => a.nome > b.nome ? 1 : -1));
    } catch (error) {
      toast.error(error as string); //EXIBE MENSAGEM DE ERRO CASO OCORRA ALGUMA FALHA NA REQUISIÇÃO
    }

  };

  //FUNÇÃO PARA EDITAR UM USUÁRIO
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  {/* RETORNO DO COMPONENTE APP */}
  return (
    <>
      <Container>
        <Title>PROFISSIONAIS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} /> {/* FORMULÁRIO PARA CADASTRO DE USUÁRIOS */}
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/> {/* GRID PARA EXIBIR OS USUÁRIOS CADASTRADOS */}
      </Container> 

    {/* TOASTIFY CONTAINER - EXIBE AS MENSAGENS DE ALERTA DA NOSSA APLICAÇÃO */}
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

    {/* GLOBALSTYLE - ESTILOS GLOBAIS DA NOSSA APLICAÇÃO */}
      <GlobalStyle />
      
    </>
  )
}

export default App
