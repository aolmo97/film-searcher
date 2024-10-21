export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export type RootStackParamList = {
  MovieDetails: { movieId: number };
  ActorDetails: { actorId: number };
};

export type MovieDetail = {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};
export type ActorDetail = {
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  profile_path: string;
};
