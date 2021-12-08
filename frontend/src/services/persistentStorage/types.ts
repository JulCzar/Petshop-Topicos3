export type Observer = () => void;
export interface Config {
  path?: string;
  expireIn?: number;
}

export class StoreItem {
  value: unknown;
  expireIn: number | undefined;

  constructor(value: unknown, expireIn?: number) {
    this.value = value;
    this.expireIn = expireIn;
  }

  parseFromString(str: string) {
    const { value, expireIn } = JSON.parse(str);

    return new StoreItem(value, expireIn);
  }
}
