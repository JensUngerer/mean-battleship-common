import { CommunicationType } from '../communicationType';

export interface ICommunicationContainer {
    type: CommunicationType;
    sourceUserId: string,
    targetUserId?: string
}