import { ArtistModelInterface } from './artist-model.interface';
export interface TrackModelInterface {
  name?: string;
  album?:string;
  cover?: string;

  url?:string;
  _id?:string | number; //puede ser string o number
  artist?: ArtistModelInterface;
 }
