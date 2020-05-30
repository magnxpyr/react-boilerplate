import {ApiResponse} from "../../store/api/model";

export interface UserDataState extends ApiResponse {
  data: {
    email: string;
    username: string;
    isLoggedIn: boolean;
  };
}
