import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

export class Block {
  previous_hash: string;
  points: number;
  nonce: number;
  hashed: string;
  hash() {
    return CryptoJS
      .SHA256(
        "foobar"+
        this.previous_hash.toUpperCase()+
        ","+
        this.points+
        ","+
        this.nonce)
      .toString()
      .toUpperCase()
      .substr(0, 4);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Scorecard Miner';
  block = new Block();
  chain = [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()];
  mine(block: Block): void {
    for (var x = 0; x <= 500000; x++) {
      block.nonce = x;
      block.hashed = block.hash(); 
      if (block.hashed.substr(0, 2) === '00') {
        break;
      }
    }
  }
  reset(block: Block): void {
    block.previous_hash = undefined;
    block.points = undefined;
    block.nonce = undefined;
    block.hashed = undefined;
  }
  getClass(chain: [Block], i: number) {
    var block = chain[i];
    if (!block.points || !block.nonce || !block.hashed) {
      return "warning";
    }
    block.previous_hash = i == 0 
      ? "0000" 
      : chain[i-1].hashed;
    return this.validate(block)
      ? "success"
      : "danger";
  }
  validate(block: Block): boolean {
    return block.hash() === block
      .hashed
      .toUpperCase();
  }
  resetChain(): void {
    this.chain = [new Block(), new Block(), new Block(), new Block(), new Block(), new Block(), new Block()]
  }
}