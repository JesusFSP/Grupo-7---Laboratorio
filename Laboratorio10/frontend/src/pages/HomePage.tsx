import { ReservationSearch } from '../components/ReservationSearch';

export function HomePage() {
  return (
    <section className="search-container">
      <h1>Consultar Reserva</h1>
      <ReservationSearch />
    </section>
  );
}