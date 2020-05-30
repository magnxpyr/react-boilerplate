import {RootState} from "./model";
import * as userData from '../pages/login/constants';


export const getUserData = (state: RootState) => state[userData.NAME];
