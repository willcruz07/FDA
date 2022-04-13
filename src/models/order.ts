import { ICustomer } from "./customer";
import { IEvaluetionSheet } from "./evaluationSheet";
import { IProcedureAmount } from "./procedureAmount";
import { IProcedurePerformed } from "./procedurePerformed";
import { IStatementOfResponsibility } from "./statementOfResponsibility";

export interface IOrder {
    customer: ICustomer;
    evaluationSheet: IEvaluetionSheet;
    procedurePerformed: IProcedurePerformed[];
    statementOfResponsibility: IStatementOfResponsibility;
    procedureAmount: IProcedureAmount;
}

