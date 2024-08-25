export interface Representative {
    name: string;
    image: string;
  }
  
  export interface Customer {
    id?: number;
    name: string;
    country: { name: string; code: string };
    representative: Representative;
    date: Date;
    balance: number;
    status: string;
    activity: number;
    verified: boolean;
  }
  