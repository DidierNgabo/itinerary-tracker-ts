export interface ITrack {
  id: number;
  name: string;
  date: string;
}

export type TracksContextState = {
  tracks: ITrack[];
  addTrack: (item: any) => void;
  removeTrack: (id: number) => void;
};
