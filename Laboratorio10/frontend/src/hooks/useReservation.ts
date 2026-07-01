import { useQuery } from '@tanstack/react-query';
import { fetchReservationDetail } from '../api/restaurantApi';

export function useReservation(reservationId: string) {
    return useQuery({
        queryKey: ['reservation-detail', reservationId],
        queryFn: () => fetchReservationDetail(reservationId),
        enabled: Boolean(reservationId),
        staleTime: 1000 * 60 * 5,
    });

}