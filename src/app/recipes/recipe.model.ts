export class Recipe {
  public name: string;
  public description: string;
  public imageSrc: string;

  constructor(name: string, description: string, imageSrc: string) {
    this.name = name;
    this.description = description;
    this.imageSrc = imageSrc;
  }

}
