type TProcedure1 = {
    description: string;
    value: boolean;
}

type TProcedure2 = {
    description: string;
    value: string[];
}

export interface IProcedurePerformed {
    procedure: TProcedure1 | TProcedure2;
}