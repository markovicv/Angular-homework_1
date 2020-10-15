import { User } from './user.models'



export class Group{
    public name:String
    public users:User[]

    constructor(){
        this.users =[]
    }
    
}