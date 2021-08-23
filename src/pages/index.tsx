import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';
import ClientCollection from '../firebase/db/ClientCollection';

export default function Home() {
  const repo: ClientRepository = new ClientCollection();

  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      setVisible('table');
    });
  }

  function newClient() {
    setClient(Client.empty());
    setVisible('form');
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible('form');
  }

  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to bg-purple-500 text-white'>
      <Layout title='Cadastro Simples'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' color='green' onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
          </>
        ) : (
          <Form client={client} cancel={() => setVisible('table')} onChangeClient={saveClient}></Form>
        )}
      </Layout>
    </div>
  );
}
