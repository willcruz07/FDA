export interface ICustomer {
    name: string;
    RG: string;
    CPF: string;
    birthDate?: Date;
    address: string;
    phone: string;
    indication?: boolean;
    indicatorFriend?: {
        name?: string;
        phone?: string;
    };
    minor?: boolean;
    responsible?: {
        name?: string;
        CPF?: string;
        phone?: string;
    };
}