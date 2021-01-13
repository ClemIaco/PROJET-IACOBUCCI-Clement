export class Client {
    public civility: string;
    public name: string;
    public firstname: string;
    public address: string;
    public postalCode: string;
    public city: string;
    public country: string;
    public phoneNumber: string;
    public email: string;
    public login: string;
    public password: string;
    public confirmPassword: string;

    constructor(
        civility: string, 
        name: string,
        firstname: string,
        address: string,
        postalCode: string,
        city: string,
        country: string,
        phoneNumber: string,
        email: string,
        login: string,
        password: string
    ) {
        this.civility = civility;
        this.name = name;
        this.firstname = firstname;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.login = login;      
        this.password = password;
    }
}
