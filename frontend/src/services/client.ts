import { PetDto } from './pet';
import { api } from 'src/http';
import { getConfig } from './getConfig';

export interface ClientDto {
  id?: number;
  name: string;
  email: string;
  birthdate: Date;
  rg: string;
  cpf: string;
  pets?: PetDto[];
}

export const index = async () => {
  try {
    const { data } = await api.get<ClientDto[]>('/Client', getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const findById = async (id: number) => {
  try {
    const { data } = await api.get<ClientDto>(`/Client/${id}`, getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const create = async (client: ClientDto) => {
  try {
    await api.post('/Client', client, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const update = async (clientId: number, client: ClientDto) => {
  try {
    await api.put(`/Client/${clientId}`, client, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const destroy = async (clientId: number) => {
  try {
    await api.delete(`/Client/${clientId}`, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
