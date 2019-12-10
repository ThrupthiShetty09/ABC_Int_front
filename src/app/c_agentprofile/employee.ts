export class Employee {
	private empid:number;
	private empname:string;
	private address:string;
	private empdob:string;
	private empcontact:number;
	private empmail:string;
	private empbranch:string;
	private username:string;
	private password:string;

	
	constructor(id,name,address,dob,contact,mail,branch) {
		this.empid=id;
		this.empname=name;
		this.address=address;
		this.empdob=dob;
		this.empcontact=contact;
		this.empmail=mail;
		this.empbranch=branch;
		
		
	}
}
