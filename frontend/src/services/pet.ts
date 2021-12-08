import { api } from 'src/http';
import { AttendanceDto } from './attendance';
import { ClientDto } from './client';
import { getConfig } from './getConfig';

export interface PetDto {
  id?: string;
  name: string;
  breed: string;
  birthdate: Date;
  weight: number;
  observations?: string;
  clientId: number;
  client?: ClientDto;
  attendances?: AttendanceDto[];
}

export const index = async () => {
  try {
    const { data } = await api.get<PetDto[]>('/Pet', getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const findById = async (id: number) => {
  try {
    const { data } = await api.get<PetDto>(`/Pet/${id}`, getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const create = async (pet: PetDto) => {
  try {
    await api.post('/Pet', pet, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const update = async (clientId: number, pet: PetDto) => {
  try {
    await api.put(`/Pet/${clientId}`, pet, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const destroy = async (clientId: number) => {
  try {
    await api.delete(`/Pet/${clientId}`, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
