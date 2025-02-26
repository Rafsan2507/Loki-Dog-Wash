import { Model, Schema } from "mongoose";

export type ISubscription = {
  userId: string;
  price_id?: string;
  plan_type: string;
  start_date: Date;
  end_date: Date;
  status: string;
  stripe_subscription_id: string;
  amount: number;
}

export type SubscriptionModel = Model<ISubscription>;
