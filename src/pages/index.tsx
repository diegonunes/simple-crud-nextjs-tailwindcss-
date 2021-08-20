import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const clients = [
    new Client('1', 'Ana', 34),
    new Client('2', 'Bia', 45),
    new Client('3', 'Carlos', 23),
    new Client('4', 'Pedro', 54),
  ];

  function selectedClient(client: Client) {
    console.log(`Editar ${client.name}`);
  }

  function deletedClient(client: Client) {
    console.log(`Excluir ${client.name}`);
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to bg-purple-500 text-white'>
      <Layout title='Cadastro Simples'>
        <div className='flex justify-end'>
          <Button className='mb-4' color='green'>
            Novo Cliente
          </Button>
        </div>
        <Form client={clients[0]}></Form>
        {/* <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table> */}
      </Layout>
    </div>
  );
}
