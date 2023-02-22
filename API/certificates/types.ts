export interface ICertificate {
  _id: string;
  title: string;
  issuanceDate: string;
  issuanceSource: string;
  sourceLink?: string;
  description: string;
  image: string;
  showInWebsite: boolean;
  showInCv: boolean;
  order: number;
}