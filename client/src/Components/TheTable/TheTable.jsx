// TheTable.jsx

import React from 'react';
import { Tabs } from 'antd';
import './TheTable.css';
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { TabPane } = Tabs;
const imageUrls = [
    'url-to-image-1.jpg',
    'url-to-image-2.jpg',
    'url-to-image-3.jpg',
    // ...
    'url-to-image-16.jpg'
  ];

const TheTable = () => {
  return (
    <Tabs defaultActiveKey="1">
        
      <TabPane tab="Text Description" key="1">
      <textarea class="style_textarea__eY_SC ag16"></textarea>
      <br></br>
        Describe the image you want to generate, in ANY language, for example:
        <ul>
          <li>A Girl wearing a floral sundress walks on the streets of Tokyo</li>
          <li>Una niña con un vestido de flores camina por las calles de Tokio,</li>
          <li>Uma garota usando um vestido floral caminha pelas ruas de Tóquio</li>
          <li>Um adorável menininho rechonchudo brinca com areia à beira-mar</li>
          <li>Une fille portant une robe à fleurs marche dans les rues de Tokyo</li>
          <li>꽃무늬 원피스를 입은 소녀가 도쿄의 거리를 걷고 있습니다</li>
          <li>花柄のワンピースを着た少女が東京の街を歩いています</li>
        </ul>
        You can also provide extremely detailed descriptions of elements such as characters, locations, actions, time, weather, environment, props, atmosphere, etc., and simultaneously specify the shooting technique, such as “shot with an iPhone, gaze directed at the camera, deep depth of field.”
        <br />
        <br />
        <strong>Example 1:</strong> A young Chinese woman with voluminous golden short hair, tattoos, exquisitely detailed skin, lifelike detailed eyes, natural skin texture, a confident expression, and stylish hip-hop attire, is walking outdoors against the backdrop of urban ruins. It's a sunny day, with bright sunlight during a summer afternoon. The focus is clear, and the image is of high quality, shot with an iPhone, achieving a hyper-realistic effect.
        <br />
        <br />
        <strong>Example 2 in Spanish:</strong> Frente a una playa de Hawai en el año 2020, una hermosa y elegante mujer posa para una foto luciendo un vestido de cuello en V de color rojo profundo. La imagen debería tener una sensación de película vintage con tonos cálidos y un efecto desvanecido. La mujer debería ser el enfoque principal de la imagen, con el velero y la playa de fondo. Por favor, utilice Artstation como referencia e incluya detalles intrincados y elementos de alta precisión.
      </TabPane>
      <TabPane tab="Template" key="2">
      Model (The following avatars only represent the Model’s type and gender, unlimited models/facial types can be generated)
      <div className="images-grid">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-item" style={{ backgroundImage: `url(${url})` }}></div>
      ))}
    </div>
      </TabPane>
      <TabPane tab="Prompt" key="3">
      <div class="flex-container">

        <div class="flex-child magenta">
        Input a Positive Prompt (required)<br></br>
        <textarea class="style_textarea__eY_SC ag16"></textarea>
        </div>

        <div class="flex-child green">
        Input a Negative Prompt (optional) <br></br>
        <textarea class="style_textarea__eY_SC ag16"></textarea>
        </div>
        </div>
        Describe the image you want to generate with words/phrases/sentences and separate them with commas. <br></br>
        Examples:<br></br>
        
        <ul>
          <li>A beautiful girl ,wearing Hanging neck vest，sleeveless，Carrying a shoulder bag，Smoked Makeup，outdoors, bright light blue sky</li>
          <li>A cat lies on a desk full of books, bagels, grass dinner plate</li>
        </ul>
        Positive prompt: Try to use positive language to describe the requirements, avoiding the use of negative words. Good sentence structure and precise descriptions will enhance the richness and depth of the generated product scenes. To emphasize certain parts, use parentheses () or double parentheses (()) to indicate their importance. If a particular aspect is crucial, you can rearrange the position, placing the most important element at the beginning to give them greater significance. If you wish to generate images in a specific style, you can specify the photography equipment, camera model, and lens.
        <br></br>
        Example 1:
        <br></br>
        1 girl, a beautiful and fitness girl, ((tall)), ((long legs)), in sneaks, short hair, in black hoodie, umbilical cord, in gym, fitness equipments, colorful background, left hand in front of her chest, in black mask,lights,wood and steel,sunshine, bright lights,
        <br></br>
        Example 2:
        <br></br>
street style photo of a nattractive 25 year old woman, fullbody shot,wearing Floral suspender skirt,highly detailed skin and hair soho ShangHai, Ektar100, 4k
<br></br>
Negative prompt: Negative prompt means “no” or “not” by default, so DO NOT include additional negative word. Avoid lengthy sentences and simply provide word/phrase.
<br></br>
Example 1:
<br></br>
cartoons, anime, bad proportions, nude, big head, no neck, extra legs, uncoordinated limbs, weird feet, weird toes, no legs, no feet,
        
      </TabPane>
      <TabPane tab="Replicate to other Tasks" key="4">
      <div class="flex-container">

        <div class="flex-child magenta">
        Task Number<br></br>
        <textarea class="style_textarea__eY_SC ag16"></textarea>
        </div>

        <div class="flex-child green">
       Execution Count   <br></br>
        <textarea class="style_textarea__eY_SC ag16"></textarea>
        </div>
        </div>
        To replicate the configuration of a designated task from the old task into a new task, select one of the generated images for the generated model and scene. This procedure will generate the display of new image with the SAME MODEL AND SCENE.
        <br></br>
Simple tutorial for task replication:
<ul>
<li>To create a set of images for the same product, the new image uploaded for the new task must be of the same product as the image from the task to be replicated from (the old task), meaning the same style & color, but different angles of the product image.</li>
<li>For the task to be replicated from (i.e., the old task), please choose front-facing photos of the models; using side-facing images may result in an unsatisfactory outcome.</li>
<li>The proportion of the model's face in the new task image should match the proportion of the model's face in the images from the task to be replicated from. Otherwise, the desired effect may not be guaranteed.</li>
    </ul>
      </TabPane>
    </Tabs>
  );
};

export default TheTable;
