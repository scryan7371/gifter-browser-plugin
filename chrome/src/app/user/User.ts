export interface User {
  id: string;
  active: boolean;
  first_name: string;
  last_name: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
  birth_date: Date;
  anniversary: Date;
  image_path: string;
  consent_date: Date;
  last_login_date: Date;
}
