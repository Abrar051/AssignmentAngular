export class Member {
    Id:string | undefined;
    FirstName:string | undefined;
    LastName:string | undefined

    constructor(id: string | undefined,firstName: string | undefined,lastName: string | undefined)
    {
        this.Id=id;
        this.FirstName =firstName;
        this.LastName = lastName;
    }
}