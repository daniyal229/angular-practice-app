export class Ingredient {
  public name: string;
  public amount: number;
  public imageSrc: string;

  constructor(name: string, amount: number, imageSrc: string = '/assets/noimage.png') {
    this.name = name;
    this.amount = amount;
    this.imageSrc = imageSrc;
  }
}

