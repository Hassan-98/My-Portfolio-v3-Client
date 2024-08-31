export interface IExperience {
  _id: string;
  title: string;
  company: string;
  companyLink?: string;
  startedAt: Date;
  endedAt?: Date;
  description: string;
  showInCv: boolean;
}