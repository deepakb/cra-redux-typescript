import { ActionType } from '../action-types';

interface Deposit {
    type: ActionType.DEPOSIT,
    payload: number
}

interface Withdraw {
    type: ActionType.WITHDRAW,
    payload: number
}

export type Action = Deposit | Withdraw;