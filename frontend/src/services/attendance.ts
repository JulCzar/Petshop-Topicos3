import { api } from 'src/http';
import { getConfig } from './getConfig';

export interface AttendanceDto {
  id?: number;
  name: string;
  details: string;
  value: string;
  date: Date;
  petId: number;
  pet?: any;
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

export const update = async (
  attendanceId: number,
  attendance: AttendanceDto
) => {
  try {
    await api.put(`/Attendance/${attendanceId}`, attendance, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const destroy = async (attendance: number) => {
  try {
    await api.delete(`/Attendance/${attendance}`, getConfig());
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
