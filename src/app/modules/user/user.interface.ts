import { Model } from 'mongoose';
import { USER_ROLES } from '../../../enums/user';


export type IUser = {
  firstName: string;
  lastName: string;
  role?: USER_ROLES;
  stripeCustomerId: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  image?: string;
  status: 'active' | 'inactive' |'delete';
  stripe_account_id?: string;
  verified: boolean;
  authentication?: {
    isResetPassword: boolean;
    oneTimeCode: number;
    expireAt: Date;
  };
  referCount?: number;
  readTerms?: boolean;
  workTerms?: boolean;
  operationTerms?: boolean;
};

export type UserModel = {
  isExistUserById(id: string): any;
  isExistUserByEmail(email: string): any;
  isMatchPassword(password: string, hashPassword: string): boolean;
} & Model<IUser>;
