import { IMessage } from "./iMessage";

export interface ICoordinatesMessage extends IMessage {
    coordinates: {
        rowIndex: number,
        columnIndex: number
    },
}
