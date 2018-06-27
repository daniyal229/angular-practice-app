export class Ingredient {
  public id: number;
  public name: string;
  public amount: number;
  public imageSrc: string;

  constructor(id: number, name: string, amount: number, imageSrc: string = '/assets/noimage.png') {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.imageSrc = imageSrc;
  }
}

