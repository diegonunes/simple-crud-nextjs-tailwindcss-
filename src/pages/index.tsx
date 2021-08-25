import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useClients from '../hooks/useClients';

export default function Home() {
  const { client, clients, newClient, selectClient, saveClient, deleteClient, tableVisible } = useClients();

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to bg-purple-500 text-white'>
      <Layout title='Cadastro Simples'>
        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' color='green' onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} selectedClient={selectClient} deletedClient={deleteClient}></Table>
          </>
        ) : (
          <Form client={client} cancel={() => tableVisible} onChangeClient={saveClient}></Form>
        )}
      </Layout>
    </div>
  );
}
