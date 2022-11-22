export default interface ILoginBody {
  id?: number;
  username?: string;
  role?: string;
  email: string;
  password: string;
}