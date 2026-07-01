import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ReservationSearch() {
    const [reservationId, setReservationId] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (reservationId.trim()) {
            navigate(`/reserva/${reservationId}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Ingrese el ID de reserva (ej. 077f7b1d...)"
                value={reservationId}
                onChange={(e) => setReservationId(e.target.value)}
                required
            />
            <button type="submit">Buscar</button>
        </form>
    );
}