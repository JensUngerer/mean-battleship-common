import { ICommunicationContainer } from "./iCommunicationContainer";

export interface ICoordinatesContainer extends ICommunicationContainer {
    coordinates: {
        rowIndex: number,
        columnIndex: number
    },
}