import { randomUUID } from "crypto";

class Canvas {
  map: Map<string, Sticky>;

  constructor() {
    this.map = new Map<string, Sticky>();
  }

  createSticky() {
    const stickie = new Sticky();
    this.map.set(stickie.id, stickie);
  }

  /**
   * @param id string
   * @returns Sticky
   */
  getSticky(id: string) {
    return this.map.get(id);
  }
}

class Sticky {
  id: string;
  title: string;
  text: string;
  createdAt: number;
  coords: Array<number>; //[x, y] ?

  // Use web crypto API: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
  constructor() {
    this.id = window?.crypto?.randomUUID();
    this.createdAt = Date.now();
  }

  // move Sticky coords
}
