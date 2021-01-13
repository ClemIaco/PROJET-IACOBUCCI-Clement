export class RegisterCustomerLogin {
    static readonly type = "[Client] Add Login";
    constructor(public payload: string) {}
}

export class RegisterJWT {
    static readonly type = "[Client] Add JWT";
    constructor(public payload: string) {}
}