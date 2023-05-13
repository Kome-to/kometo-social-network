export enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
}

export interface UserDTO {
  id: string;
  email: string;
  username: string;
  role: Role;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DTO<Object = any> {
  [id: string]: Object;
}

export interface UserNormalized {
  user: DTO<UserDTO>;
}
