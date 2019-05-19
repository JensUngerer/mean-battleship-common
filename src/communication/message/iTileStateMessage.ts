import { TileState } from './../../tileState/tileState.enum';
import { IMessage } from './iMessage';

export interface ITileStateMessage extends IMessage {
    tileState: TileState;
    isStartTile?: boolean;
    isEndTile?: boolean;
    isHorizontal?: boolean;
}
