export interface Customer {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}

export interface Table {
    id: string;
    table_number: number;
    seating_capacity: number;
    status: boolean;
}

export interface Reservation {
    id: string;
    reservation_date: string;
    guest_count: number;
    status: boolean; 
    customer: Customer;
    table: Table;
}

export interface ReservationResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Reservation[];
}