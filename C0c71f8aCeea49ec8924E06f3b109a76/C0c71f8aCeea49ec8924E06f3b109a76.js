/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class C0c71f8aCeea49ec8924E06f3b109a76 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "C0C71F8A-CEEA-49EC-8924-E06F3B109A76",
        "./C0c71f8aCeea49ec8924E06f3b109a76/costumes/C0C71F8A-CEEA-49EC-8924-E06F3B109A76.jpg",
        { x: 270, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    for (let i = 0; i < 18; i++) {
      this.direction += 20;
      yield;
    }
  }
}
