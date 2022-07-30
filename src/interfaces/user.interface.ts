export interface Id {
  id?: number;
}

export interface UserPublic {
  username: string;
  classe: string;
  level: number;
}

export interface UserPrivate extends Id, UserPublic {
  password: string;
}
