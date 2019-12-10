

export class Agent{
	private accno:number;

	private name:string;
	private dob:string;
	
	private contact:number;
	private username:string;
	private password:string;
	private  amount:number;
	private branch:number;
	
	private loan_type:string;
	private aadhar_card:string;
	private pan_card:string;
	private acc_type:string;
	private  action:string; 
	constructor(accno,name,dob,contact,username,password,amount,branch,loan_type,aadhar_card,pan_card,acc_type,action)
	{
		this.accno=accno;
		this.name=name;
		this.dob=dob;
		this.contact=contact;
		this.username=username;
		this.password=password;
		this.amount=amount;
		this.branch=branch;
		this.loan_type=loan_type;
		this.aadhar_card=aadhar_card;
		this.pan_card=pan_card;
		this.acc_type=acc_type;
		this.action=action;
		

	}
	
}
