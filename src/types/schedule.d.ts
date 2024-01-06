export interface IScheduleData {
  professional: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
  client: {
    id: string;
    name: string;
    phone: string;
  };
  procedure: {
    name: string;
    description: string;
    price: number;
    duration: number;
  };
}
