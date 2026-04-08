# Annotation Guidelines

## Task Overview

Given an image of an artwork and corresponding description, the goal of this annotation study is to [identify art-historical entities](#entity-extraction) and their [interactions](#relation-extraction) that are represented in **both** textual and visual information. An example annotation for text and image within the [annotation tool](#annotation-tool-setup) is shown below. 

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

### Entity Extraction

Please first carefully read the text and look at the artwork to identify all art-historical entities represented in **both** modalities. Such entities can include (groups of) art-historical figures (e.g., Jesus Christ, John the Baptist, Zeus), objects (e.g., tools, weapons), animals, scenes, landmarks, buildings etc. 

After identifying all entities, annotations can be created with a pre-configured instance of [Label Studio](https://labelstudio.open-develop.org/) ([https://labelstudio.open-develop.org/](https://labelstudio.open-develop.org/)). The setup of the annotation enviroment is explained [here](#annotation-tool-setup). 

The text annotations are provided by marking spans that mention art-historical entities. The image annotations are provided through corresponding bounding boxes around these mentioned entities. Detailed guidelines to annotate the entity extraction task are provided [here](guidelines-for-entity-extraction). 


### Relation Extraction

After extracting all entities, please carefully look at the text and artwork again to identify interactions between them. Please note that we focus on visible interactions since details on the image composition can be automatically infered by the bounding boxes drawn in the previous step. 

Once you identified a relation, please annotate it by drawing and naming a connection between the two bounding boxes of the corresponding entities using the image annotation tool. Detailed guidelines for relation extraction are provided [here](guidelines-for-relation-extraction). 


## Annotation Tool Setup

### Setup Workspaces 

1. Open *Label Studio* using the following link: [https://labelstudio.open-develop.org/](https://labelstudio.open-develop.org/). 
2. Log in with the credentials sent to you.
3. For an optimal workflow, we recommend opening the projects for _text annotation_ and _image annotation_ side-by-side in two separate browser windows. You can do so by right-clicking on a project and selecting the option to open it in a new window as shown below.  

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/9fa4d70a-67b3-4ba1-9bc6-1d78b116f0e3">
    <img src="https://github.com/user-attachments/assets/9fa4d70a-67b3-4ba1-9bc6-1d78b116f0e3">
  </a>

  <div class="zoom-caption">
    Home screen of Label Studio
  </div>
</div>

After completion, the annotation workspace should look similar to this example. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/32b26763-35b7-4fc9-a15e-70efdda1021c">
    <img src="https://github.com/user-attachments/assets/32b26763-35b7-4fc9-a15e-70efdda1021c">
  </a>

  <div class="zoom-caption">
    Side-by-side annotation workspaces for text and image
  </div>
</div>

### Opening an Image-Text Pair 

1. Select an artwork for annotation from the list in the _image annotation tool_. 
2. Click on the `<>` button next to the image to open the image details. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/ca32f32f-6117-4642-8233-be80f1370bbe">
    <img src="https://github.com/user-attachments/assets/ca32f32f-6117-4642-8233-be80f1370bbe">
  </a>
</div>

3. Locate and copy the _Wikidata id_ of the image starting with `Q` at the end of the filename (right) and paste it in the search bar of the text annotation tool (left).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/6a504ecc-6f80-416b-85b4-a05d8216e615">
    <img src="https://github.com/user-attachments/assets/6a504ecc-6f80-416b-85b4-a05d8216e615">
  </a>
</div>

4. The image-text pair is successfully opened and can be annotated using the guidelines below.

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/c7e9683d-11a6-43ab-bd66-9a2e64a2eae8">
    <img src="https://github.com/user-attachments/assets/c7e9683d-11a6-43ab-bd66-9a2e64a2eae8">
  </a>
  <div class="zoom-caption">
    Recommended setup of workspaces for text (left) and image annotation (right)
  </div>
</div>


## Guidelines for Entity Extraction

The goal of the entity extraction tasks is to identify and annotate entities represented in both image and text. The task comprises four steps that are systematically repeated for each entity.

1. [Identification of entities](#1-identify-art-historical-entities) represented in **both** the textual description and the corresponding artwork image, 
2. [Text annotation](#2-annotating-entities-in-text) of each entity, 
3. [Image annotation](#3-annotating-the-image) of each entity, and 
4. [Add synonyms and symbolisms](#4-synonyms-and-symbolic-representations) as metadata to each entity

> [!NOTE]
> Some example images may already include [entity relations](#guidelines-for-relation-extraction) shown as connections between the bounding boxes in the image annotation tool. 
> For this task, you can disregard these relations as they are annotated in the next task for [relation extraction](#guidelines-for-relation-extraction).

### 1. Identify Art-historical Entities

In the first step, please carefully read the textual description and identify the mentioned entities within the image of the artwork. 
If you have identified an **entity represented in both modalities**, follow the steps below to annotate it within the [text](#annotating-entities-in-text) and [image](#annotating-entities-in-images). 
We recommend to carry out all subsequent steps before annotating the next entity. 

> [!IMPORTANT]
> **Please only consider entities for annotation that are mentioned in the text and that are clearly depicted in the image!**
> Do not annotate metainformation (e.g., painters, name of the painting, inception year) or contexual information from the text that is not cleary visible in the image, e.g., events that may have led to the scene in the artwork. 


### 2. Annotating Entities in Text

The text annotation involves three steps carried out in the _text annotation workspace_
- [marking all spans](#21-mark-text-spans) representing an entity identified in [Step 1](#1-identify-art-historical-entities) 
- [assigning the most suitable and precise Wikidata identifier](#22-assigning-a-wikidata-identifier) for the entity
- [assigning an instance number](#23-assigning-instance-numbers) for unnamed individuals in entity groups (e.g., group of angels)
- [adding synonyms and symbolisms](#23-assigning-instance-numbers) to the entity

#### 2.1 Mark Text Spans

For each entity identified in [Step 1](#1-identify-art-historical-entities), **mark every unique text span** (it is not necessary to annotate the same span multiple times) in the artwork description **that refers to that entity**—whether it appears as an alternate surface form, a synonym, or symbolic representation. 
For example:
- `Jesus Christ`, `Christ child`, `Christ`, `Jesus`
- `Mary`, `Virgin`, `mother of Jesus`
- `beast`, `dragon`
- `Jupyter` in form of a `swan`

These synonyms and symbolic representations will be added as metadata for the entity in [Step 2.4](#24-synonyms-and-symbolic-representations)

Some so‑called *long‑tail entities*—e.g., *Episodes of the Lives of St. Benedict* or *Throne of Jesus and Madonna*—consist of multiple words or even multiple entities. 
When annotating, **mark the entire phrase** (e.g., _Joseph of Arimathea_) as a single entity and **do not** create separate annotations for any potential sub‑entities inside that span (such as *St. Benedict*, *Jesus*, *Madonna*, *Joseph*, or *Arimathea*).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084">
    <img src="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084">
  </a>
</div>

#### 2.2 Assigning a Wikidata Identifier

This step aims at assigning a unique **Wikidata identifier** to the entity, so that:  
- **(i)** all surface forms, synonyms, and symbolic references can be unambiguously linked to the same entity within the text (see [Step 2.4](#24-synonyms-and-symbolic-representations)); 
- **(ii)** the entity can be consistently matched between text and image annotations (see [image annotation](#3-annotating-the-image)).

For this purpose, please first search for the most suitable Wikidata entry by following these steps: 
1. Choose the span that best represents the entity and use it as a search term on [https://www.wikidata.org/](https://www.wikidata.org).
2. Assess the search results and to find the matching Wikidata entry of the entity. 
3. Click on the Wikidata entry to verify whether it accurately reflects the searched entity.
4. Assign the Wikidata identifier to the span chosen in (1) by clicking on it and pressing the `+` symbol as shown [here](https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084).

As a result, **only** the _most representative span_ is annotated with the corresponding Wikidata identifier. 
It is not required, to add the Wikidata identifier to the other spans representing that entity. 
Instead, these representations are added as synonyms according to [Step 2.4](#24-synonyms-and-symbolic-representations).

> [!WARNING]
> _I cannot find a suitable Wikidata entry. How should I proceed?_

Sometimes Wikidata might not cover a specific entity. In such cases, please choose the next most suitable span, synonym, or parent class of the entity and repeat the steps above. For example, if you cannot find an entity like `beast`, you could assign the Wikidata identifier of its parent class `mythical creature` [(`Q2239243`)](https://www.wikidata.org/wiki/Q2239243). 

> [!TIP]
> To find the most suitable Wikidata identifier, you can use the textual description, artwork, and (if necessary) other external resources.


#### 2.3 Assigning Instance Numbers

Sometimes an entity (e.g., *angels*, *apostles*) denotes a **group** of individuals, while a particular member of that group is singled out in the text (e.g., because it interacts with another entity).
In such cases, add an **instance number** to the Wikidata identifier you supplied in the previous step using this syntax  

```
<WikidataID>#<id>
```

where `<id>` is a simple integer (e.g., 1, 2, 3, ...) that uniquely denotes the specific individual within the group.  

An example of the final annotation format is shown [here](https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084).

> [!CAUTION]
> TODO Daniel: Machen wir das wirklich immer auch wenn es nicht nötig ist wie in dem Beispiel oben? Ich würde vorschlagen, dass nur zu tun wenn es notwendig ist. Bitte ergänze auch ein konkretes Beispiel wo man den Sinn hinter dem Schritt eindeutig sieht. 


#### 2.4 Synonyms and Symbolic Representations 

As mentioned in [Step 2.1](#21-annotate-text-spans), description might refer to the same entity using different surface forms (e.g., `Jesus` vs. `Jesus Christ`), synonyms (`Mary` vs. `mother of Jesus`), symbolisms (e.g., `Jupyter` in form of a `swan`), etc. 
  
To add these representations to the most representative span annotated in [Step 2.2](#22-assigning-a-wikidata-identifier), please follow these steps: 
1. Click on the span comprising another repsentation of the entity/
2. Click on the button "create relation between regions" (as highlighted in the image below).
3. Click on the representative span annotated with a unique identifier according to [Step 2.2](#22-assigning-a-wikidata-identifier). 

This adds a relation between the two spans. To determine the relation type please proceed as follows: 

4. Click on the tab "Relations" in the bottom right of the _text annotation workspace_.
5. Assign a suitable relation from the drop-down list, e.g., `same as`, `symbolizes` 

> [!CAUTION]
> TODO Daniel: Add good example for the process described above

> [!NOTE]
> If the relation is uncertain, please also pick `uncertain` from the drop-down list. 
> An example is shown below.

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d">
    <img src="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d">
  </a>
  <div class="zoom-caption">
    The text mentions an uncertain relation "[...] an old female saint (Anne or Elisabeth)" 
  </div>
</div>


### 3. Annotating the Image

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

## Guidelines for Relation Extraction

The goal of the relation extraction task is to identify and annotate **directed, visible interactions** between two art-historical entities that are **already annotated in both the text and the image**. These relations must be **visually evident in the artwork** and **supported by the image composition**, as inferred from the bounding boxes drawn during entity extraction.

> [!NOTE]  
> Some example images may already include relation annotations (i.e., arrows between bounding boxes). For this task, you can disregard these as they are placeholders and will be re-annotated according to the guidelines below.

### 1. Identify Visible Interactions

In the first step, carefully re-examine the **textual description** and the **artwork image** to identify **interactions between two entities** that are **clearly depicted in the image**. Focus only on **visible** —such as physical contact, gestures, or symbolic actions—that can be directly observed in the visual layout.

> [!IMPORTANT]  
> **Only annotate relations that are visually present in the image.**  
> Do **not** annotate relations that are implied solely by the text, even if they are plausible.  
> The relation must be **inferred from the image**, not from the description alone.

<!--
For example:
- A person **holding** a book or object
- A figure **presenting** an object to another
-->

> [!TIP]  
> Use the bounding boxes from the entity extraction step as visual anchors. The spatial arrangement and positioning of these boxes can help determine whether a relation is plausible.

---

### 2. Annotate Relations in the Image

Once a visible interaction is identified, annotate it using the **image annotation tool** in Label Studio. The process involves three steps:

#### 2.1 Create a Directed Relation

Relations are **always directed**, meaning each relation has a **source** (the entity initiating the action) and a **target** (the entity receiving the action).

To create a relation:
1. Click on the **source entity’s bounding box** in the image.
2. Press the **relation button** (shown in the figure below) located on the right side of the image viewer.
3. Then, click on the **target entity’s bounding box**.

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/c3b60aa5-6238-46dc-82f2-0091dbda6915">
    <img src="https://github.com/user-attachments/assets/c3b60aa5-6238-46dc-82f2-0091dbda6915">
  </a>
  <div class="zoom-caption">
    Press the relation button and select the target entity to draw a directed connection.
  </div>
</div>

After this, an **arrow** will appear from the source to the target. In this case, Mary is the source entity and the christ child is the target entitiy.

#### 2.2 Assign a Relation Type

To name the relation:
1. Navigate to the **"Relations" tab** in the bottom-right panel of the image annotation tool.
2. Hover over the newly created relation to reveal the **"..." menu**.
3. Click the menu and select the appropriate **relation** from the dropdown list.

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/8edcfb29-e3fc-4cb1-95d6-23b166567da2">
    <img src="https://github.com/user-attachments/assets/8edcfb29-e3fc-4cb1-95d6-23b166567da2">
  </a>
  <div class="zoom-caption">
    Use the "..." menu to assign a relation type from the dropdown list.
  </div>
</div>



<div class="zoom-container">
<a href="https://github.com/user-attachments/assets/03d60141-bd0f-4b20-8f4c-fe766ef2fb81" class="zoom-img"><img alt=showbutton src="https://github.com/user-attachments/assets/03d60141-bd0f-4b20-8f4c-fe766ef2fb81" class="zoom-img"></a>
  <div class="zoom-caption">
    Press the relation button on the right and select another entity to draw a relation between those
  </div>
</div>

The dropdown contains a **fixed set of relation** that are sufficient to capture all meaningful interactions in art-historical contexts. Choose the **most precise and descriptive** relation available.

> [!WARNING]  
> Do **not** invent new relation types. Use only those listed in the dropdown.

---

### 3. Unified Guidelines for Relation Annotation
The relations between the entities are governed by a specific set of rules, which are outlined below.


- **Annotate only relations that are *visually present* in the image.**  
  If an action is described in the text but **not shown**, it must **not** be annotated.  
  **Example:**  
  <div class="zoom-container">
<a href="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"><img alt="txt+img" src="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4" class="zoom-img"></a>
  <div class="zoom-caption">
    "it depicts the goddess Venus  <i>arriving at the shore</i> after her birth, when she had <i>emerged from the sea</i> fully-grown [...]."
  </div>
</div>
  
  The text says Venus **emerged from the sea**, but the image shows her **already on the shore**.  
  → The **emergence** is **not visible** and must **not** be annotated.


- **Use `img_inf` when the text is vague but the image shows a more specific interaction.**  
  Terms like *with*, *near*, or *together with* are not sufficiently informative.  
  If the image reveals a clearer action, annotate the **specific visual relation**.  
  **Example:**  
  Text: *“Elisabeth with baby John the Baptist”*  
  Image: Elisabeth is **holding** the infant.  
  → Annotate: **Elisabeth → holds → baby John the Baptist**  
  → Prefix: **`img_inf`**

  <div class="zoom-container">
    <a 
      class="zoom-img"
      href="https://github.com/user-attachments/assets/98f38f04-eac7-438f-b964-24da795e7a8d">
      <img src="https://github.com/user-attachments/assets/98f38f04-eac7-438f-b964-24da795e7a8d">
    </a>
    <div class="zoom-caption">
      "It shows mainly Elisabeth <i>with</i> baby John the Baptist, Joseph and Mary <i>with</i> infant baby Jesus (l.t.r.). These figures of the New Testament maintain eye contact."
    </div>
  </div>


- **All relations must be strictly binary — exactly two entities per relation.**  
  Multi‑entity relations are not allowed and have to be skipped.  
  **Example:**  

  <div class="zoom-container">
    <a 
      class="zoom-img"
      href="https://github.com/user-attachments/assets/4e5d8cb8-bf7c-48f3-9102-35337c489a0e">
      <img src="https://github.com/user-attachments/assets/4e5d8cb8-bf7c-48f3-9102-35337c489a0e">
    </a>
    <div class="zoom-caption">
      "The work is in a huge gilded and carved frame, with three cusps covered placed on jutting corbels. The three arches are decorated with vegetable motifs; over them are three panels (whose upper frame is lost), containing the paintings, from the left, of the Angel of the Annunciation, the Blessing <i>Christ between Cherubims</i> and the Annunciation. [...]."
    </div>
  </div>


- **Do not use multi‑entity relations** such as *between*, *surrounded by*, or *among*.  
  These inherently involve more than two entities and therefore violate the binary‑relation rule.  
  **Example:**  
  *“Christ between Cherubims”*  
  → Must be split into **two binary relations** (see above).


- **Do not annotate spatial relations** such as *near*, *beside*, *together with*, *in front of*, or *above*.  
  These are **not informative** and can be inferred automatically from bounding‑box geometry.  
  **Example:**  
  Two figures standing next to each other  
  → **Do not annotate “beside.”**  
  → Only annotate an **action‑based** relation if it is visually present (e.g., *touching*, *gazing at*, *holding*).

---
### 4. Handle Information Disparity Between Text and Image
The text and image may not always convey the same level of detail. To account for this, relation annotations are prefixed to indicate the source of the information:

- No prefix: The relation is present in both the text and the image.
Example: "Venus arrives at the shore" — both the text and image show Venus stepping onto land.

<div class="zoom-container"> <a class="zoom-img" href="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"> <img src="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"> </a> <div class="zoom-caption"> "It depicts the goddess Venus <i>arriving at the shore</i> after her birth, when she had <i>emerged from the sea</i> fully-grown [...]." </div> </div>

- img_inf prefix: The relation is only visible in the image, not explicitly stated in the text.
Example: An angel touching a throne — the text may mention the throne and the angel, but not the physical contact.

>[!CAUTION]
>The img_inf prefix must only be used when both entities are >present in the text.
>If one entity is missing from the text, the relation cannot be >inferred, even if it is visible in the image.

<div class="zoom-container"> <a class="zoom-img" href="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"> <img src="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"> </a> <div class="zoom-caption"> "[...] having the <i>angels</i> around the Virgin simply placed one above the other, rather than being spatially arranged. The <i>throne</i> [...]." </div> </div>

>[!TIP]
>Use img_inf to capture visual details that are not described but >clearly depicted — such as gestures, contact, or symbolic actions.


---

### 5. Annotate Hierarchical and Part-of Relations

When a detailed entity is described later in the text and is **visually present**, it must be annotated as a **separate entity** and linked to its parent using the **`part_of`** relation.

<!--
> [!NOTE]  
> The `part_of` relation is **only used for visual parts** (e.g., garments, accessories) that are **clearly depicted** and **described in detail**.
-->

Example:
- The text first mentions a **vestment**.
- Later, it describes the **cope** and **mitre** as parts of it.
- Both **cope** and **mitre** are visually distinct and must be annotated as separate entities.
- Then, create a **`part_of`** relation from **cope** and **mitre** to **vestment**, with the **`img_inf`** prefix (since the text does not explicitly state the hierarchical relationship).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/9b532771-036f-462b-9491-7bf307d12a1b">
    <img src="https://github.com/user-attachments/assets/9b532771-036f-462b-9491-7bf307d12a1b">
  </a>
  <div class="zoom-caption">
    "Saint Donatian, dressed in brightly coloured <i>vestments</i>, stands to the left. [...] The precision of the detail achieved is especially noticeable in the rendering of threads of St. Donatian's blue and golden embroidered <i>cope and mitre</i> [...]."
  </div>
</div>

> [!CAUTION]  
> Do **not** annotate overly detailed descriptions that are **not visually distinct** (e.g., "veins on the face").  
> Only annotate **visually separable parts**.

---

### 6. Handle Transitive Relations

When a sequence of actions is depicted (e.g., A presents X to B), annotate **each step** as a separate binary relation.

Example:

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/5aee3217-184c-4664-b302-dfeeaadc7004">
    <img src="https://github.com/user-attachments/assets/5aee3217-184c-4664-b302-dfeeaadc7004">
  </a>
  <div class="zoom-caption">
    "The scene depicts the Virgin Mary crowned by a hovering Angel while <i>she presents the Infant Jesus to Rolin</i>. [...]."
  </div>
</div>


Annotate:
- **Mary → presents → Infant Jesus**
- **Infant Jesus → presented_to → Rolin**

> [!NOTE]  
> Do **not** create a single relation like *"presents to"* — only **binary relations** are allowed.

---

> [!NOTE]  
> Once all relations are annotated, you may proceed to the next image-text pair.  
> For further support, refer to the [annotation tool setup](#annotation-tool-setup) and [entity extraction guidelines](#guidelines-for-entity-extraction).


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




