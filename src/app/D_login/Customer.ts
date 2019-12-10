export class Customer{
	account_no:number;
	username:string;
	password:string;
	constructor(account_no:number,username:string,password:string){
		this.account_no=account_no;
		this.username=username;
		this.password=password;
	}
}