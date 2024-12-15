export type Account = {
  id: string;
  username: string;
  avatarUrl: string;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
};

export type Accounts = {
  items: Account[];
  total: number;
  page: number;
  size: number;
  pages: number;
};
