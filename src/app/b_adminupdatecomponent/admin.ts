export class Admin{
	public empId:number;
	public name:String;
	public DOB:Date;
	public phone_num:number;
	public username:String;
	public password:String;
	public role:String;

	constructor(empId:number,name:String,DOB:Date,phone_num:number,username:String,password:String,role:String){
		this.empId=empId;
		this.name=name;
		this.DOB=DOB;
		this.phone_num=phone_num;
		this.username=username;
		this.password=password;
		this.role=role;

	}

}
