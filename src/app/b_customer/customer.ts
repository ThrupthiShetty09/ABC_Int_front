export class customer{

    public account_no:number;
	public name:string;
	public DOB:string;
	public phone_no:number;
	public username:string;
	public password:string;
	public balance:number;
	public branch_id:number;
	public loan_id:string;
	public type_id:string;
	public aadhar_no:number;
	public pan_no:string;

constructor(account_no:number, name:string, DOB:string, phone_no:number, username:string, password:string,balance:number, branch_id:number, loan_id:string, type_id:string,aadhar_no:number,pan_no:string)
{
	this.account_no=account_no;
	this.name=name;
	this.DOB=DOB;
	this.phone_no=phone_no;
	this.username=username;
	this.password=password;
	this.balance=balance;
	this.branch_id=branch_id;
	this.loan_id=loan_id;
	this.type_id=type_id;
	this.aadhar_no=aadhar_no
	this.pan_no=pan_no
	
}

}