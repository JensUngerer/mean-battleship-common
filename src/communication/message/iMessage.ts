import { SocketIoReceiveTypes } from './../socketIoReceiveTypes';
import { SocketIoSendTypes } from './../socketIoSendTypes';
export interface IMessage {
    type: SocketIoSendTypes | SocketIoReceiveTypes;
    sourceUserId: string,
    targetUserId?: string
}
