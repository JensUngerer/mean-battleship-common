import { TileState } from './../../tileState/tileState.enum';
import { ICoordinatesMessage } from './iCoordinatesMessage';

export interface ITileStateMessage extends ICoordinatesMessage {
    tileState: TileState;
    isStartTile?: boolean;
    isEndTile?: boolean;
    isHorizontal?: boolean;
}
