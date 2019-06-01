import { TileState } from "../tileState/tileState.enum";

export interface IDomesticTileState {
    rowIndex: number;
    columnIndex: number;
    tileState: TileState,
    isStartTile: boolean;
    isEndTile: boolean;
    isHorizontal: boolean;
}
