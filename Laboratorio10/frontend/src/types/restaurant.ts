export interface Customer {
    id: number;
    full_name: string;
    email: string;
    phone: string;
}

export interface Table {
    id: number;
    number: string;
    capacity: number;
    status: boolean;
}

export interface Reservation {
    id: number;
    reservation_date: string;
    num_guests: number;
    status: string;
    customer: Customer;
    table: Table;
}

export interface ReservationResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Reservation[];
}