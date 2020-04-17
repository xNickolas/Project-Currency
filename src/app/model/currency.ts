export class Currency {
    constructor(
      public money_name: string,
      public rate: number,
      public country?: string, 
      public flag_img?: string, 
      public id?: number 
    ) { }
}
  