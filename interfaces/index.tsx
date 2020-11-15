// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type PlayerType = {
    id: string,
    name: string,
    part: string,
    status: boolean,
    performedTunes: Array<string>
};

export type TuneType = {
    id: string,
    name: string,
    playingKey: number,
    status: number,
    performedPlayers: Array<string>
};

export type SettingType = {
    id: string,
    name: string,
    roomId: string
};

export type QueryParamsType = {
    roomId: string,
    playerId: string
}
