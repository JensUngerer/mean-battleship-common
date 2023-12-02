import { TileState } from "../../tileState/tileState.enum";
import { ICoordinatesContainer } from "./iCoordinatesContainer";

export interface ITileStateContainer extends ICoordinatesContainer {
    tileState: TileState;
    isStartTile?: boolean;
    isEndTile?: boolean;
    isHorizontal?: boolean;
}