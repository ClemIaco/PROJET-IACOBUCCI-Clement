import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AccountStateModel } from "./account-state-model";
import { RegisterCustomerLogin, RegisterJWT } from "../actions/account-action";

@State<AccountStateModel>({
    name: 'account',
    defaults: {
        tokenJWT: '',
        login: ''
    }
})

export class AccountState {

    @Selector()
    static getLogin(state: AccountStateModel): string {
      return state.login;
    }
  
    @Selector()
    static getTokenJWT(state: AccountStateModel): string {
      return state.tokenJWT;
    }

  
    @Action(RegisterCustomerLogin)
    addLogin(
      { patchState }: StateContext<AccountStateModel>,
      { payload }: RegisterCustomerLogin
    ): void {
      patchState({login: payload});
    }
  
    @Action(RegisterJWT)
    addTokenJWT(
      { patchState }: StateContext<AccountStateModel>,
      { payload }: RegisterJWT
    ): void {
      patchState({tokenJWT: payload});
    }
  }