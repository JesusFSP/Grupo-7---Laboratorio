import { useNavigate, useParams } from 'react-router-dom';
import { ReservationView } from '../components/ReservationView';
import { useReservation } from '../hooks/useReservation';

export function ReservationPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useReservation(id || '');

    if (isLoading) return <div className="loader">Buscando datos de la reserva...</div>;
    if (isError) return (
        <div className="error-box">
            <p> No se pudo encontrar la reserva con ID: {id}</p>
            <button onClick={() => navigate('/')}>Volver al buscador</button>
        </div>
    );

    return (
        <div>
            <button className="back-btn" onClick={() => navigate('/')}>← Nueva Búsqueda</button>
            {data && <ReservationView data={data} />}
        </div>
    );
}