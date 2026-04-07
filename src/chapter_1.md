# Annotation Guidelines

## Task Overview

Given an image of an artwork and corresponding description, the goal of this annotation study is to [identify art-historical entities](#entity-extraction) and their [interactions](#relation-extraction) that are represented in **both** textual and visual information. An example annotation for text and image within the [annotation tool](#annotation-tool-setup) is shown below. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a">
    <img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a">
  </a>

  <div class="zoom-caption">
    Annotations for named entities within the description (left) and image (right) 
  </div>
</div>

### Entity Extraction

Please first carefully read the text and look at the artwork to identify all art-historical entities represented in **both** modalities. Such entities can include (groups of) art-historical figures (e.g., Jesus Christ, John the Baptist, Zeus), objects (e.g., tools, weapons), animals, scenes, landmarks, buildings etc. 

After identifying all entities, annotations can be created with a pre-configured instance of [Label Studio](https://labelstudio.open-develop.org/) ([https://labelstudio.open-develop.org/](https://labelstudio.open-develop.org/)). The setup of the annotation enviroment is explained [here](#annotation-tool-setup). 

The text annotations are provided by marking spans that mention art-historical entities. The image annotations are provided through corresponding bounding boxes around these mentioned entities. Detailed guidelines on the annotations are provided in [here](guidelines-for-entity-extraction). 


### Relation Extraction

After extracting all entities, please carefully look at the text and artwork again to identify interactions between them. Please note that we focus on interactions since details on the image composition can be automatically infered by the bounding boxes drawn in the previous step. 

Once you identified a relation, please annotate it by drawing and naming a connection between the two corresponding entities using the image annotation tool. Detailed guidelines are provided [here](guidelines-for-relation-extraction). 


## Annotation Tool Setup

To access the annotation tools please open *Label Studio* using the following link: [https://labelstudio.open-develop.org/](https://labelstudio.open-develop.org/). Then, please log in with the credentials sent to you.

For an optimal workflow, we recommend opening the projects for _text annotation_ and _image annotation_ side-by-side in two separate browser windows. You can do so by right-clicking on a project and selecting the option to open it in a new window as shown below.  

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/9fa4d70a-67b3-4ba1-9bc6-1d78b116f0e3">
    <img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/9fa4d70a-67b3-4ba1-9bc6-1d78b116f0e3">
  </a>

  <div class="zoom-caption">
    Home screen of Label Studio
  </div>
</div>

Your annotation workspace should look similar to this. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/32b26763-35b7-4fc9-a15e-70efdda1021c">
    <img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/32b26763-35b7-4fc9-a15e-70efdda1021c">
  </a>

  <div class="zoom-caption">
    Side-by-side annotation workspaces for text and image
  </div>
</div>

### Open image for annotation 
Opening the image in the file is done by simply pressing one of them. The list of the images is put in the left side and the image is opened in the center. Now you are ready to annotate the image following the guidlines below. 
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/d298760a-a62e-4deb-a44b-788b91245c06" class="zoom-img"><img alt=imageloaded src="https://github.com/user-attachments/assets/d298760a-a62e-4deb-a44b-788b91245c06" class="zoom-img"></a>
      </figure>
      <figcaption>Image is loaded at the right side</figcaption>
    </td>
  </tr>
</table>

### Open text annotation tool
To open the respective description of the image, the id of the image needs to be filtered in the text annotation tool. The id is found by pressing the "<>" button next to the image in the image annotation file. It is the last part of the of this "/data/upload/24/600334d8-Q568847.jpg" string and highlighted below. Copy that name and paste it in the search bar of the textual annotation tool. Only one match is expected to show up. Selecting it opens the description to the image and you can start annotating the image according to the guidelines below.

  
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/ca32f32f-6117-4642-8233-be80f1370bbe" class="zoom-img"><img alt=imageloaded src="https://github.com/user-attachments/assets/ca32f32f-6117-4642-8233-be80f1370bbe" class="zoom-img"></a>
      </figure>
      <figcaption>Press the "show task source" button</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/ed8e113d-e022-4b2d-91e1-8fcf4b6d9572" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/ed8e113d-e022-4b2d-91e1-8fcf4b6d9572" class="zoom-img"></a>
      </figure>
      <figcaption>Locate the id of the image</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/6a504ecc-6f80-416b-85b4-a05d8216e615" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/6a504ecc-6f80-416b-85b4-a05d8216e615" class="zoom-img"></a>
      </figure>
      <figcaption>Copy&Paste the name in the search bar</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/c7e9683d-11a6-43ab-bd66-9a2e64a2eae8" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/c7e9683d-11a6-43ab-bd66-9a2e64a2eae8" class="zoom-img"></a>
      </figure>
      <figcaption>Start annotating both tasks at the same time</figcaption>
    </td>
  </tr>
</table>


<!-------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------->

## Guidelines for entity extraction
As already described [above](#task), the task is to mark the entities in both the text and the image at the same time. The entities that are marked in the image have to be present in the description as well. The first image shows an example with the tool _label-studio_.
The steps to follow are described below. The example images here are fully annotated once, therefore they might already have the relations annotated. For this "entities" section, please focus only on the boxes itself.

### Annotating the text
The text is annotated together with the image using the same tool. The only information needed are the entities, which means that there is no need to draw relations within the description. Since the descriptions are generally less information rich, there are less annotations which makes it the easier part.

#### Assigning the span 
For the textual annotations, drawing the spans is trivial, just mark the whole word and nothing but the word. That means no whitepaces or any form of punctuation words. The only exception is if the entity consists of multiple words, e.g. in event entities or entities like _iron brigde_.
The left part of the figure in [task definitions](#example) shows an example. There is only one field to choose from called _entity_. 
The other field called _relation_ is only to take notes and will be ignored.

Note that the id at the beginning of the description is not part of the actual description an has to be ignored!

#### Assigning the Wikidata link
As also described in a [later chapter](#adding-a-wikidata-link) each entity needs to link as accurately as possible to the correct wikidata link of the entity. Assign it by pressing on the marked entity, press the "+" symbol and paste the previuosly found wikidata link. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084"><img alt="txtwiki" src="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084"  class="zoom-img"></a>
      </figure>
      <figcaption>The wikidata link is on the right hand side of the image</figcaption>
    </td>
  </tr>
</table>

<!---
#### Adding a group size number
Some of the described entities appear in a group rather than alone. The descision is made using the image with the conditions discussed in [this chapter](#group-annotations). For the textual annotations, the groups are not specifically counted
--->


#### Assigning instance numbers
The example image in the [above](#assigning-the-wikidata-link) chapter also contains the instance number right after the Wikidata link. They are denoted with a "#" to differentiate them clearly fro the link.
Like later described in the [instance count chapter](#adding-instance-counters),    
the instances for the text needs to fit those in the painting. Consider the same example as in the said chapter. 
The expected instances for the flying angels would be "https://www.wikidata.org/wiki/Q235113\_#1-2_" and for the foreground angels it would be www.wikidata.org/wiki/Q235113\_#3-6_. Both would be for the corresponding *angels* term. 


#### No meta information entities
Entities that come from meta-information, i.e, not present in the image, are not annotated within the text. This focuses mainly on information such as the painter, the name of the painting, etc. It does not, however, include entities that are e.g. named groups. So if people belong to certain classes, groups or occupations, those annotations are made _if_ it is distinctly matchable. 
 The figure below has no annotations with neither maesà nor with Cimabue or the Basilica of San Francesco di Assisi. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/75195fa1-f38e-4c39-8d16-1f27940af101"><img alt="no_assisi" src="https://github.com/user-attachments/assets/75195fa1-f38e-4c39-8d16-1f27940af101"  class="zoom-img"></a>
      </figure>
      <figcaption> "Textual description with meta information present. The annotations show that there is no such meta information annotated."</figcaption>
    </td>
  </tr>
</table>


<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

### Annotating the image
#### Bounding Boxes
Bounding boxes are used to mark point-of-interests within the image. The guidlines below describe how to draw them into the images.
##### General
In general, the image annotations need to be as accurate as possible. While for the [textual annotation](#assigning-the-span) that task is trivial, the box annotations within the images are more tricky. They need to be as accurate as possible, which means that the entirety of the body has to be in the box. This includes halos as much as it includes clothings, even if different objects would be partially annotated as well.  Few exceptions are made if body parts are partially obstructed by other objects and, e.g. in group scenes, hard to assign to the correct person.
The first image in the figure below shows how the boxes have to be drawn over the entities that are clearly visible but also those that have their body parts partially obstructed. While the first figure shows easily drawn boxes, the second shows a harder one. The table obstructs their bodies and due to them being colse togther, assigning the body parts correctly is close to impossible. Additionally,  since this particular example shows a small crowd close together they are annotated in a group. More on that on the [group annotation](#group-annotations) section.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6"><img alt="span1" src="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6"  class="zoom-img"></a>
      </figure>
      <figcaption> "The crucified Christ is lowered from the cross, his lifeless body held by Joseph of Arimathea and Nicodemus."</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f"><img alt="span2" src="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f"  class="zoom-img"></a>
      </figure>
      <figcaption> "The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21."</figcaption>
    </td>
  </tr>
</table>


##### Group annotations
Entities have to be annotated as a group if
-  They are not specifically named
-  The number of relevant entities start overlapping and reach 5 overlapped entities
-  multiple entities of the same type close together e.g. flowers

The figure below shows the blessed and the damned on the left and right side of the painting respectively. Since they both are a big group of people they exceed the maximum amount of individual entities and become a group.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/79c4901a-073d-4f67-b05f-6520d566ee5d"><img alt="when_group" src="https://github.com/user-attachments/assets/79c4901a-073d-4f67-b05f-6520d566ee5d"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] Rising up the left hand side of the painting (at Jesus' right hand) are the <i>blessed</i>, whilst the <i>damned</i> fall into hell on the right hand side [...]."</figcaption>
    </td>
  </tr>
</table>


##### Big bounding boxes
Big bounding boxes that are drawn all over the image are allowed if a entity is a scene or if a group of people need to be annotated.
In the below figure, to capture the three archangels within the painting, a box that spans over the entire image is needed.  The fact that the box is barely visible but still marked as such, as indicated one the right list of highlighted entities, shows that the box spans over the entire image.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/3f5d6f83-b2b3-4e60-9bd0-9a36eb34fa7e"><img alt="big_box" src="https://github.com/user-attachments/assets/3f5d6f83-b2b3-4e60-9bd0-9a36eb34fa7e" class="zoom-img"></a>
      </figure>
      <figcaption> "[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."</figcaption>
    </td>
  </tr>
</table>

##### Body parts 
Body parts are not treated as their own entity and therefore can also not be part of a relation. Those body parts will be treated as the whole person. E.g. _child sits in her lap_ will be treated as child sits on mother. Therefore, there is no bounding box that spans over specific body part of a Person.
The figure below shows Mary and the Christ child. While the descriptions describes Christ siting on her lap, the bounding box is drawn over Mary as a whole.


<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/beab2356-23d1-470e-914e-e00e7eef2974"><img alt="lap" src="https://github.com/user-attachments/assets/d5e96161-f7aa-4e1f-b722-e58fff3ddd86" class="zoom-img"></a>
      </figure>
      <figcaption>"[...] The Virgin Mary is enthroned at the centre of the semicircular space, which most likely represents a church interior, with the <i>Christ Child on her lap</i>.[...]."</figcaption>
    </td>
  </tr>
</table>


##### Background-object boxes
Background entities are of equal importance as foreground entities. The boxes are drawn in one complete box instead of multiple small ones. This needs to be followed even if major foreground scences would be part of the background bounding box.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/fc4caf3a-d7af-4c27-b542-0d99e693a2bf"><img alt="background1" src="https://github.com/user-attachments/assets/fc4caf3a-d7af-4c27-b542-0d99e693a2bf"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] The landscape background is typical of Perugino, <i>with mountains and hills in deep perspective</i>. To the left of the cross stand saint Jerome (inspiration for the Jesuati) and Francis of Assisi. To its right are Mary Magdalene touching Christ's feet, Blessed Giovanni Colombini (founder of the Jesuati) and John the Baptist (patron saint of Florence). John points to Christ, whilst Jerome has thrown down his cardinal's cap at the foot of the cross, symbolising his rejection of earthly honours. [...]."</figcaption>
    </td>
  </tr>
</table>


#### Annotations of the boxes
Once a box is drawn over a entity, multiple textboxes appear beneath the image. If they are not visible at first you have to scroll down. The following information have to be added. 
##### Adding a name
All the boxes are simply called _box_, so in order to give them the proper name, a label has to be added. That label is the name of the box and describes the object that is annotated. The very first textbox is responsible for that annotation. This annotation is mandatory and saving is impossible until a name has been added. The system tells you which field in which box misses annotations.
Only ever use one single name per box and feel free to just use the name that is used in the description. 

The figure below shows Mary with infant Jesus and the annotation box is drawn over her. At the bottom, the name of the box can be seen as "Mary". 

<table>
  <tr>
    <td> 
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/e4416fd0-6ae5-4892-b6e6-004e53e8ea52"><img alt="named_box" src="https://github.com/user-attachments/assets/e4416fd0-6ae5-4892-b6e6-004e53e8ea52" /></a>
      </figure>
      <figcaption>"The central and centered motif is the young Virgin Mary seated with Baby Jesus on her lap.Depicted in precious clothes and jewellery, with her left hand Mary holds a carnation [...]."</figcaption>
    </td>
  </tr>
</table>


##### Adding a Wikidata link
<!----- -[Assigning the Wikidata link](#assigning-the-wikidata-link) ---->
Every entity has to be linked as closely as possible to the correct Wikidata page. 
The figure below shows how linking looks like for the same example. It is given in the text-field just below the name and is mandatory to be given. 

<table> 
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/83541d1b-be87-486f-a5f0-d20be015fba8"><img alt="group_instance" src="https://github.com/user-attachments/assets/83541d1b-be87-486f-a5f0-d20be015fba8"  class="zoom-img"></a>
      </figure>
      <figcaption>"The central and centered motif is the young Virgin Mary seated with Baby Jesus on her lap.Depicted in precious clothes and jewellery, with her left hand Mary holds a carnation [...].</figcaption>
    </td>
  </tr>
</table>

##### Adding instance counters
While not mandatory, most entities have to be instatiated by typing the specific instance of a entity in the  _instance_ field right below the wikidata link.
The figure below shows how it is done in the base case of being the only instance of a entity.
<table> 
  <tr>
    <td>
      <figure class="zoom-container"><img width="1020" height="783" alt="group_instance2" src="https://github.com/user-attachments/assets/e903bc47-d7d1-4dbd-bb37-4960cecdcc9e" />
        <a href="https://github.com/user-attachments/assets/e903bc47-d7d1-4dbd-bb37-4960cecdcc9e"><img alt="group_instance2" src="https://github.com/user-attachments/assets/e903bc47-d7d1-4dbd-bb37-4960cecdcc9e"  class="zoom-img"></a>
      </figure>
      <figcaption>"The central and centered motif is the young Virgin Mary seated with Baby Jesus on her lap.Depicted in precious clothes and jewellery, with her left hand Mary holds a carnation [...].</figcaption>
    </td>
  </tr>
</table>


##### Fitting the instances to the correct textual entities
For every entity given in the text, there might be more than just one in the image. If it is clear that all of the present entities in the image are described, then annotations need to specifically count each instance of the entity. This ensures the correctness and completeness.
Using the same example from [instances within text](#instances-within-text), in the first figure below, the instance count for the selected angel is displayed as 2 since it is the second angel. (see at the right part the thrid "Text: 1" filed has a "2" denoting that particular angel as the second one.) There is no particular rule regarding the orders or where to start counting. However, the instances have to match those described in the text. 
The second figure highlights a second group of angels in the foreground. Those angels refer to the ones standing next to Jesus. Again, pay attention to the right part.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/fa7abe0f-bbdb-4878-aa97-846da871ace9"><img alt="instances1" src="https://github.com/user-attachments/assets/fa7abe0f-bbdb-4878-aa97-846da871ace9" class="zoom-img"></a>
      </figure>
      <figcaption>"It depicts Christ standing on a double basement, keeping the Cross. <i>Behind him is a damask cloth held by two angels</i> and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. In the foreground are four angels [...]."</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/5e22e9ac-79a1-4bbb-8236-836c9c379c66"><img alt="instances2" src="https://github.com/user-attachments/assets/5e22e9ac-79a1-4bbb-8236-836c9c379c66"  class="zoom-img"></a>
      </figure>
      <figcaption>"It depicts Christ standing on a double basement, keeping the Cross. Behind him is a damask cloth held by two angels and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. <i>In the foreground are four angels</i> [...]."</figcaption>
    </td>
  </tr>
</table>


##### Adding group size number
The figure below shows how the group size is given for the group of "blessed", which in this image are more than 10 people. 
the size of a group entity is written in the fourth text area and is capped at 10. After 10, we simply denote the size as 10+. Since this group is unique the instance count is 1 which is written in the field above. 

<table> 
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/7a4f2775-0a2d-4204-9358-d3926d349163"><img alt=group_instance3 src="https://github.com/user-attachments/assets/7a4f2775-0a2d-4204-9358-d3926d349163"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] Rising up the left hand side of the painting (at Jesus' right hand) are the blessed, whilst the damned fall into hell on the right hand side.[...]."</figcaption>
    </td>
  </tr>
</table>

##### Synonyms
Often times the description uses synonyms to describe the same entity in different ways. 
we differentiate between 
- synonyms that refer to the same object e.g. the Virgin instead Mary or Christ instead of Jesus
- synonyms that describe a entitiy with different wordings. e.g. beast instead or dragon.
  
 Synonyms are annotated by writting  them in the _synonym_ text field. Note, that for the second type of synonyms, we needto put the wikidata link behind the synonym separated by a comma. Every synonym (possibly with their wikidata link) have to be separated by a semi-colon. 
 Note, only the written synonyms are wanted not once that people know about. That means that if Jesus is shown and described as jesus only, there are no synonyms. Since this does not happen everytime, this field is not mandatory for every entity
 The figure with the dragon below is an example. It shows saint George spearing a dragon. The description of the image also mentions a beast and refers to the dragon introducing a synonym.


<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/dd576460-556a-44a3-aa04-e53157693bd0"><img alt="dragon1" src="https://github.com/user-attachments/assets/dd576460-556a-44a3-aa04-e53157693bd0"  class="zoom-img"></a>
      </figure>
      <figcaption> "It shows a scene from the famous <i>story of Saint George and the dragon</i>. On the right George is spearing the <i>beast</i>, and on the left the princess is using her <i>belt as a leash</i> to take the dragon up to the town.[...]."</figcaption>
    </td>
  </tr>
</table>

##### Symbolize
Similarly, to the synonymy case, in the below figure, the belt is described to symbolize a leash. The annotation in such cases is done by filling them in the last textbox. This field is not mandatory as it does not always occur.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/dd576460-556a-44a3-aa04-e53157693bd0"><img alt="dragon2" src="https://github.com/user-attachments/assets/dd576460-556a-44a3-aa04-e53157693bd0"  class="zoom-img"></a>
      </figure>
      <figcaption> "It shows a scene from the famous <i>story of Saint George and the dragon</i>. On the right George is spearing the <i>beast</i>, and on the left the princess is using her <i>belt as a leash</i> to take the dragon up to the town.[...]."</figcaption>
    </td>
  </tr>
</table>

##### Implications
As already described, some entities are events or actions. The figure below contains the phrase *story of Saint George and the dragon*, which in itself is treated as a entity. However, it also implies the existence of other entities. Those are *Saint George* together with *dragon*. This leads to three annotations instead of just one. However, it is not an implication if the said entities appear in the description specifically and outside from meta-information.
To annotate this correctly there is a button that needs to be pressed if and only if such a implication is made. The vast majority will not be implications therefore, most of the times the button is not pressed.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/fb59d5d9-6e90-4469-9db9-e4c56eafdd29"><img alt="dragon3" src="https://github.com/user-attachments/assets/fb59d5d9-6e90-4469-9db9-e4c56eafdd29"  class="zoom-img"></a>
      </figure>
      <figcaption> "It shows a scene from the famous <i>story of Saint George and the dragon</i>. On the right George is spearing the <i>beast</i>, and on the left the princess is using her <i>belt as a leash</i> to take the dragon up to the town.[...]."</figcaption>
    </td>
  </tr>
</table>


##### Uncertainty in entities
In some cases, the description is not giving certain information about e.g. people present in the image. In those cases, we use the _uncertain?_ button at the end. 
Similarly to uncertainity about an entity there could be uncertainty about relations. That is described in [Uncertainty in relations](#uncertainty-in-relations) 
if the image-text pair consists of only uncertain entities, said pair is skipped. 

The figure below shows an example of this. Note the right hand side of the image next to "Choices:" it says "uncertain?". This marks the synonym and the symbolization as uncertain. 
In this example, the marked saint is noted to be "anne" or "elizabeth" however this is uncertain information about the entity.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d" ><img alt="maybe" src="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] <i>an old female saint (Anne or Elisabeth)</i> and an old male saint (Joachim or Joseph). On the left are <i>a female saint (possibly Mary Magdalene)</i> [...]."</figcaption>
    </td>
  </tr>
</table>



##### Background objects further annotations
Background objects are not instantiated. The figure below shows that contrary to the regular case, these background entities of landscape entities are not instantiated.
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/59b30f38-0cb6-4ed0-8110-b44a7e25f43a"><img alt="background2" src="https://github.com/user-attachments/assets/59b30f38-0cb6-4ed0-8110-b44a7e25f43a"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] The landscape background is typical of Perugino, <i>with mountains and hills in deep perspective</i>. To the left of the cross stand saint Jerome (inspiration for the Jesuati) and Francis of Assisi. To its right are Mary Magdalene touching Christ's feet, Blessed Giovanni Colombini (founder of the Jesuati) and John the Baptist (patron saint of Florence). John points to Christ, whilst Jerome has thrown down his cardinal's cap at the foot of the cross, symbolising his rejection of earthly honours. [...]."</figcaption>
    </td>
  </tr>
</table>


##### At least one entity
As long as there is at least one [certain](#uncertainty-in-entities) entity  given, the pair is not skipped. 
The first figure below shows an example with only one valid entity annotation
and no relations. While those pairs are not skip, the second figure shows a pair that has no valid entity due to the uncertainty expressed in the description.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/5046dc1e-50b5-45f6-a752-0f3ef375f291"><img alt="skip" src="https://github.com/user-attachments/assets/5046dc1e-50b5-45f6-a752-0f3ef375f291"  class="zoom-img"></a>
      </figure>
      <figcaption>"A Goldsmith in His Shop, Possibly Saint Eligius is a 1449 painting by Petrus Christus, now in the Metropolitan Museum of Art. The main figure in the painting <i>was long thought to be Saint Eligius</i>, the patron saint of goldsmiths, due to the presence of a halo."</figcaption>
    </td>
  </tr>
</table>


<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/91377c6c-1cae-405e-8ecf-f3f5c44f1dcd"><img alt="no_skip" src="https://github.com/user-attachments/assets/91377c6c-1cae-405e-8ecf-f3f5c44f1dcd"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] <i>The Madonna</i> was portrayed standing, alone, often with a closed book on her belly, an allusion to the Incarnate Word. The works were associated with the devotions of pregnant women, praying for a safe delivery. Here the Virgin wears the Girdle of Thomas, a belt of knotted cloth cord that was a relic held in Prato Cathedral, which many depictions wear."</figcaption>
    </td>
  </tr>
</table>



## Guidelines for relation extraction
As mentioned in the beginning, the second task is to mark the relations between two entities, *only* in the image. The relations that are marked do not necessarily have to be present in the description. However the corresponding entities have to. Again, The first image's right side shows an example.
The steps to follow are described below. 

### Creating relations between entities
Relations are always directed, that means that every relation has a source and a target. To create a relation between the two, the source entity has to be selected and the highlighted button in the figure below has to be pressed. After that the target entity has to be selected. 
Entities be selected by pressing a bounding box directly on the image or by selecting the correct entity in the region list on the bottom right.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/c3b60aa5-6238-46dc-82f2-0091dbda6915" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/c3b60aa5-6238-46dc-82f2-0091dbda6915" class="zoom-img"></a>
      </figure>
      <figcaption>Press the relation button on the right and select another entity to draw a relation between those</figcaption>
    </td>
  </tr>
</table>

Afterwards, an unnamed arrow from the source entity to the target entity will show up in the image. To give the relation a name, you have to navigate to the "relation" tab in the bottom right.
That tab lists all the relations and by pressing the "..." button that shows up after hovering over a relation. 
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/8edcfb29-e3fc-4cb1-95d6-23b166567da2" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/8edcfb29-e3fc-4cb1-95d6-23b166567da2" class="zoom-img"></a>
      </figure>
      <figcaption>Press the relation button on the right and select another entity to draw a relation between those</figcaption>
    </td>
  </tr>
</table>

A list of relations is opened and selectable by a drop down menu. These relations are a fixed number of relations that are enough to annotate every possible relation between two entities.
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/03d60141-bd0f-4b20-8f4c-fe766ef2fb81" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/03d60141-bd0f-4b20-8f4c-fe766ef2fb81" class="zoom-img"></a>
      </figure>
      <figcaption>Press the relation button on the right and select another entity to draw a relation between those</figcaption>
    </td>
  </tr>
</table>


### Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there is the option to use either no prefix before the relation or to select the *img_inf* relation. If a relation is present both in the description and image then no prefix is used. That implies, that using no prefix means the relation is present in image and description rather than in none of them.
For example, in the figure below with and excerpt of its description in the caption shows the triplet: "Venus; *arrive*; shore". Since the descriptions describes this and it is visible in the image no prefix is used.

<table>
  <tr>
    <td>
    <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"><img alt="txt+img" src="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4" class="zoom-img"></a>
        </figure>
      <figcaption>"it depicts the goddess Venus  <i>arriving at the shore</i> after her birth, when she had <i>emerged from the sea</i> fully-grown [...]."</figcaption>
    </td>
  </tr>
</table>


### Inferences
There are cases where the information of the image is richer than the description. 
The figure below shows the same example as before but with the *img_inf* prefix and the relation *touch*. That shows that the *touch* relation between the angel and the throne is inferred from the image.
The condition that needs to be met for such inferred relations is that both entities, in this case the angel and the throne, are present in the description.
Since both are present this inference has to be made. 
On the other hand, the Christ child is not annotated since he is not present in the text.
That also means once again that *only* relations can be inferred. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"><img alt="inf" src="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531" class="zoom-img"></a>
      </figure>
      <figcaption> "[...] having the <i>angels</i> around the Virgin simply placed one above the other, rather than being spatially arranged. The <i>throne</i> [...]."</figcaption>
    </td>
  </tr>
</table>


### No unseen relations
Just like the entities that are not present in the image, the relations that are not visible in the image are also not annotated. The figure in [the first example](#textual-and-image-annotations)
shows that the goddess Venus *has arrived* at the shore. It does not, however, show that Venus emerged from the sea. She is depicted on a clam at the shore. The described event has already taken place and is therefore not present in the image. 
Inferring this relation would mean the relation is inferred based on the description and not from the image. Infereations are only allowed based on the images.


### Entities with further information
Some descriptions describe a entity at some point and then at a later point give more details. For example, the text may say a person wears some sort of clothes. Later it describes those clothes in more detail naming particular parts like hats. Those entities would be annotated follwoing the [entity](#annotating-the-image) guidlines.
Furthermore, those more detailed parts need to be marked with the _part\_of_ relation
The figure below shows the person on the left wearing a _vestment_. This _vestment_ is later described as _cope_ and _mitre_, leading to him also wearing a _cope_ and a _mitre_. Finally, _Mitre_ and _cope_ are also _part\_of_ the _vestment_. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/9b532771-036f-462b-9491-7bf307d12a1b"><img alt="cope" src="https://github.com/user-attachments/assets/9b532771-036f-462b-9491-7bf307d12a1b" class="zoom-img"></a>
      </figure>
      <figcaption>"[...] Saint Donatian, dressed in brightly coloured <i>vestments</i>, stands to the left. [...] The precision of the detail achieved is especially noticeable in the rendering of threads of St. Donatian's blue and golden embroidered <i>cope and mitre</i>, in the weave of the oriental carpet, and in the stubble and <i>veins on van der Paele's aging face</i>."</figcaption>
    </td>
  </tr>
</table>

### Not to detailed
Descriptions can describe the visuals too detailed. Neither the relations nor entities are annotated. The same example shown in above figure describes the face of the kneeling person in too much detail describing the veins on his face. This relation is not annotated.


### Individuals are _part\_of_ a group
If there are groups with distinguishable individuals, like in the below figure, then they have to have the _part\_of_ relation to the group with the *img_inf* prefix. Keep in mind that groups can have other relations as well.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/9eaced69-f1c7-4a8d-aba8-e5cc70cbe2ab"><img alt="part_of" src="https://github.com/user-attachments/assets/9eaced69-f1c7-4a8d-aba8-e5cc70cbe2ab"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."</figcaption>
    </td>
  </tr>
</table>

### More specific relations
Similar to the *img_inf* prefix that infers relations, there are cases where the relations are described with very little detail i.e. words like *with* are used when for example *holds* would be more fitting. If the image contains such more detailed information then also include those with the *img_inf* prefixes. 

The figure below shows how such annotations are made. The description describes the two adults as being _with_ the respective child. Since the _with_ relation is not informative enough, the relation is given together with the relation _hold_. Finally, since the hold relation is inferred, the _img_inf_ prefix is also given. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/98f38f04-eac7-438f-b964-24da795e7a8d"><img alt="with_or_hold" src="https://github.com/user-attachments/assets/98f38f04-eac7-438f-b964-24da795e7a8d"  class="zoom-img"></a>
      </figure>
      <figcaption> "It shows mainly Elisabeth <i>with</i> baby John the Baptist, Joseph and Mary <i>with</i> infant baby Jesus (l.t.r.).These figures of the New Testament maintain eye contact."</figcaption>
    </td>
  </tr>
</table>


### Transitive relations 
Sometimes descriptions  describe an entity doing something to another entity for the sake or goal of yet another entity. The figure below shows Mary presenting the Christ child to Rolin. To express this in the annotations, it is annotated that Mary presents Christ child and Chrits child is presented to Rolin.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/5aee3217-184c-4664-b302-dfeeaadc7004"><img alt="present" src="https://github.com/user-attachments/assets/5aee3217-184c-4664-b302-dfeeaadc7004" class="zoom-img"></a>
      </figure>
      <figcaption>"The scene depicts the Virgin Mary crowned by a hovering Angel while <i>she presents the Infant Jesus to Rolin</i>. [...]."</figcaption>
    </td>
  </tr>
</table>


### Only binary relations
Since every relation is defined to be between a subject and an object, they have to be binary. Any relations that have more entities such as *between* are not allowed. Furthermore, there will be no inferences made to substitute these relations.
The figure below shows, in the top panel, Christ with two cherubs. The relation would be *between* for both cherubs and Christ. Since it is impossible for a entity to be between just one other entity, this relation is left out.  

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/4e5d8cb8-bf7c-48f3-9102-35337c489a0e"><img alt="tertiär" src="https://github.com/user-attachments/assets/4e5d8cb8-bf7c-48f3-9102-35337c489a0e"  class="zoom-img"></a>
      </figure>
      <figcaption>"The work is in a huge gilded and carved frame, with three cusps covered placed on jutting corbels. The three arches are decorated with vegetable motifs; over them are three panels (whose upper frame is lost), containing the paintings, from the left, of the Angel of the Annunciation, the Blessing <i>Christ between Cherubims</i> and the Annunciation. [...]."</figcaption>
    </td>
  </tr>
</table>


### No spatial relations
Spatial annotations are not annotated since they harbour little information and can be inferred by the location of the boxes. Additionally, relations such as _together with_ are treated as spatial information. An exception for that is discussed later. 

<!----------
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/4983f5f8-89f8-4d1b-9686-738c91160f04"><img alt="big_box" src="https://github.com/user-attachments/assets/4983f5f8-89f8-4d1b-9686-738c91160f04"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] the picture represents the three archangels: Michael _on the left_ Raphael _in the centre_, and Gabriel holding a lily, together with a young Tobias, son of Tobit."</figcaption>
    </td>
  </tr>
</table>
---------->

## Miscellaneous 

### Long tail entities
Some entities can be longer such as *Episodes of the lives of St. Benedict* or *Throne of Jesus and Madonna*. Those have to be annotated as one entity without extracting other entities like *St. Benedict*, *Jesus* or *Madonna*.

### Actions or Events
As earlier described, Events that take place currently are annotated however those that must have already past, since those can not be seen, are not annotated. Also, similar to the point above, inferring that someone does something to someone else just because the event or action may hint to it is not allowed. For example, inferences from *Coronation of the Virgin*  to the entity *Jesus* and the relation *Jesus; crowns; the Virgin* are not allowed. However since the word *the Virgin* is within the event itself inferring the existence of her as a entity in the painting is allowed and annotated.


### Addition to inferred relations
If relations are inferred, it may be possible and logical to infer the respective most applicable relation for both of entities. For example the  figure in [More specific relations](#more-specific-relations) shows that for the left child, it could be possible for it to sit on his mother, while it could also be possible for the mother to hold the child. Therefore all possibilities have to be inferred. However, only the active forms. That means, that  child;  held_by; mother is not inferred.




