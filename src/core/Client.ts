export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(id: string, name: string, age: number) {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static empty(): Client {
    return new Client('', '', 0);
  }

  get id(): string {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get age(): number {
    return this.#age;
  }
}
