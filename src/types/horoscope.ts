export interface getZodiacSignArgs {
  month: number;
  day: number;
}

export interface getZodiacSignResponse {
  sign: string;
}

export interface getZodiacSignError {
  error: string;
}
