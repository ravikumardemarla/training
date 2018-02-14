export interface IStudentModel {
  name: string;
  marks: IMarks;
  rollNumber: string;
  totalMarks: number;
  status: string;
  isTopper: boolean;
}


export interface IMarks {
  maths: string;
  english: string;
  science: string;
}
