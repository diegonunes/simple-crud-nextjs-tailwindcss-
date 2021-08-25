import { useEffect, useState } from 'react';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';
import ClientCollection from '../firebase/db/ClientCollection';
import useTableOrForm from './useTableOrForm';

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const { tableVisible, showTable, showForm } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function newClient() {
    setClient(Client.empty());
    showForm();
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    tableVisible,
  };
}
