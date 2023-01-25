import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import C0c71f8aCeea49ec8924E06f3b109a76 from "./C0c71f8aCeea49ec8924E06f3b109a76/C0c71f8aCeea49ec8924E06f3b109a76.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  C0c71f8aCeea49ec8924E06f3b109a76: new C0c71f8aCeea49ec8924E06f3b109a76({
    x: -12.17647058823529,
    y: -2.705882352941174,
    direction: -150,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
