import { useState } from 'react';
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

  function saveClient(client: Client) {
    console.log(`Salvar ${client.name}`);
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to bg-purple-500 text-white'>
      <Layout title='Cadastro Simples'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' color='green' onClick={() => setVisible('form')}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
          </>
        ) : (
          <Form client={clients[0]} cancel={() => setVisible('table')} onChangeClient={saveClient}></Form>
        )}
      </Layout>
    </div>
  );
}
