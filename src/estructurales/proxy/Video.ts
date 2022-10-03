export default class Video {
  public id: string;
  public title: string;
  public data: string;

  public constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.data = 'Random Video';
  }
}
