import { type ReservationResponse } from '../types/restaurant';

const API_BASE_URL = 'http://127.0.0.1:8000/api/reservations/';

export async function fetchReservationDetail(id: string): Promise<ReservationResponse> {
    const response = await fetch(`${API_BASE_URL}${id}/`);

    if (!response.ok) {
        throw new Error('Error al obtener la reserva. Verifique el código.');
    }
    return response.json();


}