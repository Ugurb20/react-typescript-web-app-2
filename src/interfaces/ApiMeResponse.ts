import { PetEntity } from '@domain/types/common/pet';

export default interface ApiMeResponse {
  id: number;
  lifetime_tips: number;
  lifetime_product_sales: number;
  lifetime_service_sales: number;
  dogs: Array<PetEntity>;
  created_at: string;
  updated_at: string;
  name: string;
  uid: string;
  email: string;
  phone: string;
  address: string;
  role: number;
  user: number;
}
