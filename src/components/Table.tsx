import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient;

  function renderHead() {
    return (
      <tr>
        <th className='text-left p-4'>Id</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {showActions ? <th className='p-4'>Ações</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className='text-left p-4'>{client.id}</td>
          <td className='text-left p-4'>{client.name}</td>
          <td className='text-left p-4'>{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className='flex justify-center'>
        {props.selectedClient ? (
          <button
            className='flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1'
            onClick={() => props.selectedClient?.(client)}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}
        {props.deletedClient ? (
          <button
            className='flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1'
            onClick={() => props.deletedClient?.(client)}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'>{renderHead()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
