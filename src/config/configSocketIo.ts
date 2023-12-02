export module ConfigSocketIo {
    export const CONNECTION_PATH: string = 'connection';
    export const API_PATH: string = 'api';
    export const WS_CLOSE_ID: string = 'close';
    export const WS_CONNECT_ID: string = 'connection';
    export const WS_ON_MESSAGE_ID: string = 'message';
    export const WS_ON_ERROR_ID: string = 'error';
    export const SOCKET_IO_CONNECT_ID: string = 'connect';
    export const SOCKET_IO_DISCONNECT_ID: string = 'disconnect';  
    export const SOCKET_IO_SERVER_URL: string = 'http://localhost';
    export const SOCKET_IO_SERVER_URL_WS : string = 'ws://localhost'
    export const PORT: number = 3000;
    export const PORT_WS: number = 3001;
}