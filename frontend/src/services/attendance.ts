import { api } from 'src/http';
import { getConfig } from './getConfig';
import { PetDto } from './pet';

export interface AttendanceDto {
  name: string;
  details: string;
  value: number;
  petId: number;
  pet?: PetDto;
}

export const index = async () => {
  try {
    const { data } = await api.get<AttendanceDto[]>('/Attendance', getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const findById = async (id: number) => {
  try {
    type T = AttendanceDto;

    const { data } = await api.get<T>(`/Attendance/${id}`, getConfig());

    return data;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const create = async (attendance: AttendanceDto) => {
  try {
    await api.post('/Attendance', attendance, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const update = async (attendanceId: number, attendance: PetDto) => {
  try {
    await api.put(`/Attendance/${attendanceId}`, attendance, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const destroy = async (clientId: number) => {
  try {
    await api.delete(`/Attendance/${clientId}`, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
