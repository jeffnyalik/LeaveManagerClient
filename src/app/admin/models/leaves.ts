export class Leave {
  leave_name: string;
  leave_type: string;
  pending: boolean;
  reasons: string;
  created_at: Date;

  public constructor(leave_name:string, leave_type:string, pending:boolean, reasons:string, created_at:Date){
    this.leave_name = leave_name;
    this.leave_type = leave_type;
    this.pending = pending;
    this.reasons = reasons;
    this.created_at = created_at;
  }

}