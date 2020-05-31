import * as UserData from '../pages/login/index'

export type RootState = {
  [UserData.constants.NAME]: UserData.model.UserDataState;
}
