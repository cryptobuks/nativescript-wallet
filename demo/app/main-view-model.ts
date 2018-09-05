import { Observable } from 'tns-core-modules/data/observable';
import { Wallet } from 'nativescript-wallet';

export class HelloWorldModel extends Observable {
  public message: string;
  private wallet: Wallet;

  constructor() {
    super();

    this.wallet = new Wallet();
    this.message = this.wallet.message;
  }
}
