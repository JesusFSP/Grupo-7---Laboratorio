import { type ReservationResponse } from '../types/restaurant';

interface Props { data: ReservationResponse }

export function ReservationView({ data }: Props) {
    const reservation = data.results ? data.results[0] : (data as any);

    if (!reservation || !reservation.customer) return <p>Reserva no válida.</p>;
    const { customer, table } = reservation;

    return (
        <article className="certificate-card">
            <header className="certificate-header">
                <h1>COMPROBANTE DE RESERVA</h1>
                <p>Fecha de emisión: {new Date().toLocaleDateString('es-PE')}</p>
            </header>

            <section className="info-section">
                <h3> DATOS DEL CLIENTE</h3>
                <p><strong>Nombre:</strong> {customer.first_name} {customer.last_name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Teléfono:</strong> {customer.phone_number}</p>
            </section>

            <section className="table-section">
                <h3>DETALLES DE ATENCIÓN</h3>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID Reserva</th>
                            <th>Mesa</th>
                            <th>Fecha/Hora</th>
                            <th>Comensales</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#{reservation.id.slice(0, 8)}</td>
                            <td>Mesa {table.table_number} ({table.seating_capacity} pax)</td>
                            <td>{new Date(reservation.reservation_date).toLocaleString('es-PE')}</td>
                            <td>{reservation.guest_count}</td>
                            <td>{reservation.status ? "Confirmada" : "Cancelada"}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    );
}