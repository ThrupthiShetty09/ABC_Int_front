export class agent{
	public agent_id:number;
	public name:string;
	public DOB:Date;
	public phone_no:number;
	public username:string;
	public password:string;
	public branch_id:number;
	

constructor(agent_id:number,name:string, DOB:Date, phone_no:number, username:string, password:string, branch_id:number)
{
	this.agent_id=agent_id;
	this.name=name;
	this.DOB=DOB;
	this.phone_no=phone_no;
	this.username=username;
	this.password=password;
	this.branch_id=branch_id;	
}


}
