# Task Overview

Given an image of an artwork and corresponding description, the goal of this annotation study is to [identify art-historical entities](#entity-extraction) and their [interactions](#relation-extraction) that are represented in **both** textual and visual information. An example annotation for text and image within the [annotation tool](setup) is shown below. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a">
    <img src="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a">
  </a>

  <div class="zoom-caption">
    Annotations for named entities within the description (left) and image (right) 
  </div>
</div>

## Entity Extraction

Please first carefully read the text and look at the artwork to identify all art-historical entities represented in **both** modalities. Such entities can include (groups of) art-historical figures (e.g., Jesus Christ, John the Baptist, Zeus), objects (e.g., tools, weapons), animals, scenes, landmarks, buildings etc. 

After identifying all entities, annotations can be created with a pre-configured instance of [Label Studio](https://labelstudio.open-develop.org/) ([https://labelstudio.open-develop.org/](https://labelstudio.open-develop.org/)). The setup of the annotation enviroment is explained [here](setup). 

The text annotations are provided by marking spans that mention art-historical entities. The image annotations are provided through corresponding bounding boxes around these mentioned entities. Detailed guidelines to annotate the entity extraction task are provided [here](entity-extraction). 


## Relation Extraction

After extracting all entities, please carefully look at the text and artwork again to identify interactions between them. Please note that we focus on visible interactions since details on the image composition can be automatically infered by the bounding boxes drawn in the previous step. 

Once you identified a relation, please annotate it by drawing and naming a connection between the two bounding boxes of the corresponding entities using the image annotation tool. Detailed guidelines for relation extraction are provided [here](relation-extraction). 
