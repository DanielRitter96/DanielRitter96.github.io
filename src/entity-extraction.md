# Guidelines for Entity Extraction

The goal of the entity extraction tasks is to identify and annotate (groups of) entities represented in both image and text. 

Every entity mentioned in the text that maps to a unique image region is treated as a separate entity.
Thus, a collective entity (e.g., `the apostles`) is annotated independently from its individual members (e.g., `Peter`, `John`), allowing both the group and its constituents to be captured distinctly.

For each distinct entity the aannotation workflow comprises three systematic steps: 

1. [Identification of entities](#1-identify-art-historical-entities) represented in **both** the textual description and the corresponding artwork image, 
2. [Text annotation](#2-annotating-entities-in-text) of each entity, and
3. [Image annotation](#3-annotating-the-image) of each entity.

> [!NOTE]
> Some example images may already include [entity relations](#guidelines-for-relation-extraction) shown as connections between the bounding boxes in the image annotation tool. 
> For this task, you can disregard these relations as they are annotated in the next task for [relation extraction](#guidelines-for-relation-extraction).

## 1. Identify Art-historical Entities

Please read the artwork description carefully and locate every entity that is also clearly visible in the image.

Only annotate entities that satisfy these two conditions:
- They are named or described in the text.
- They are clearly depicted in a single, identifiable region of the image.

Do **not** annotate
- metadata such as the painter’s name, title of the work, creation date, etc.
- Contextual information that is mentioned in the text but not visually present (e.g., historical events that led to the scene).

> [!IMPORTANT]
> If a group (e.g., `angels`, `apostles`) and specific members (e.g., `Peter`) mentioned in the text refer to different image regions, they should be annotated individually.

If you have identified an **entity in the text that clearly corresponds to a distinct image region**, follow the steps below to annotate it within the [text](#annotating-entities-in-text) and [image](#annotating-entities-in-images). 

We recommend to carry out all subsequent steps for a single entity before annotating the next one. 


## 2. Annotating Entities in Text

The text annotation involves three steps carried out in the _text annotation workspace_
- [marking all spans](#21-mark-text-spans) representing a unique entity identified in [Step 1](#1-identify-art-historical-entities) 
- [assigning the most suitable and precise Wikidata identifier](#22-assigning-a-wikidata-identifier) for the entity
- [assigning an instance number](#23-assigning-instance-numbers) for individuals and subgroups within entity groups (e.g., group of angels)
- [adding synonyms and symbolisms](#23-assigning-instance-numbers) to the entity


### 2.1 Mark Text Spans

For an entity identified according to [Step 1](#1-identify-art-historical-entities), **mark every unique text span** (it is not necessary to annotate the same span multiple times) representing it in the artwork description—whether it appears as an alternate surface form, a synonym, or symbolic representation. 
For example:
- `Jesus Christ`, `Christ child`, `Christ`, `Jesus`
- `Mary`, `Virgin`, `mother of Jesus`
- `beast`, `dragon`
- `Jupiter` in form of a `swan`

Some so‑called *long‑tail entities*—e.g., *Episodes of the Lives of St. Benedict* or *Throne of Jesus and Madonna*—consist of multiple words or even multiple entities. 
When annotating, **mark the entire phrase** (e.g., _Joseph of Arimathea_) and **do not** create separate annotations for potential sub‑entities inside that span (such as *St. Benedict*, *Jesus*, *Madonna*, *Joseph*, or *Arimathea*).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084">
    <img src="https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084">
  </a>
</div>

### 2.2 Assigning a Wikidata Identifier

This step aims at assigning a unique **Wikidata identifier** to the entity, so that: 
- **(i)** all surface forms, synonyms, and symbolic references can be unambiguously linked to the same entity within the text (see [Step 2.4](#24-synonyms-and-symbolic-representations)); 
- **(ii)** the entity can be matched between text and image annotations (see [image annotation](#3-annotating-the-image)).

For this purpose, please find the most suitable Wikidata entry by following these steps: 
1. Choose the text span that best represents the entity and use it as a search term on [https://www.wikidata.org/](https://www.wikidata.org).
2. Assess the search results and to find the matching Wikidata entry of the entity. 
3. Click on the Wikidata entry to verify whether it accurately reflects the entity.
4. Assign the Wikidata identifier to the span chosen in (1) by clicking on it and pressing the `+` symbol as shown [here](https://github.com/user-attachments/assets/f0330a1a-11b9-4619-8bfe-c53a64b16084).

As a result, **only** the _most representative span_ of an entity is annotated with the corresponding Wikidata identifier. 
The remaining spans are annotated as synonyms as described in [Step 2.4](#24-synonyms-and-symbolic-representations).

> [!WARNING]
> _I cannot find a suitable Wikidata entry. How should I proceed?_

Sometimes Wikidata might not cover a specific entity. In such cases, please choose the next most suitable span, synonym, or parent class of the entity and repeat the steps above. For example, if you cannot find an entity like `beast`, you could assign the Wikidata identifier of its parent class `mythical creature` [(`Q2239243`)](https://www.wikidata.org/wiki/Q2239243). 

> [!TIP]
> To find the most suitable Wikidata identifier, you can use the textual description, artwork, and (if necessary) other external resources.


### 2.3 Assigning Instance Numbers

The entities identified in [Step 1](#1-identify-art-historical-entities) can not only refer to specific individuals, objects, or scenes but could also represent **entity groups** or **entity subgoups**,

To differentiate between unique entities, groups, and subgroups please follow these steps. 

#### Annotation of Unique Entities

If the entity is a unique entity (e.g., a specific individual or object) that may or may not be part of the group, please add an **instance id** to the Wikidata identifier from the previous step using this syntax 

```
<WikidataID>#<id>
```

where `<id>` is a simple integer (e.g., 1, 2, 3, ...) that allow for disambiguating the group members. 

These unique entities can be specific individuals or objects (e.g., [Dragon](https://www.wikidata.org/wiki/Q7559) as `Q7559#1`) or an unnamed member of a group (e.g., a particular [man](https://www.wikidata.org/wiki/Q8441) `Q8441#2`) as shown in the examples below. 

<!-- Beispiel 1-->
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/6bd45c9a-74b3-4306-800b-1a64ddcbe01a">
    <img src="https://github.com/user-attachments/assets/6bd45c9a-74b3-4306-800b-1a64ddcbe01a">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>

<!-- Beispiel 2-->
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/a99480ef-5003-4a4c-bd89-913916a75461">
    <img src="https://github.com/user-attachments/assets/a99480ef-5003-4a4c-bd89-913916a75461">
  </a>
  <div class="zoom-caption">
    "In the painting, an old man in a white robe sits upright on a bed, one hand extended over a cup, the other gesturing in the air.He is surrounded by other men of varying ages, most showing emotional distress, unlike the stoic old man.The young man handing him the cup looks the other way, with his face in his free hand.Another young man clutches the thigh of the old man.An elderly man sits at the end of the bed, slumped over and looking in his lap.To the left, other men are seen through an arch set in the background wall."
  </div>
</div>


#### Annotation of Groups

When annotating a group of entities (e.g., a group of angels), we differentiate between two cases. 

**(1) For groups comprising five or less entities**, please follow this annotation scheme: 

```
<WikidataID>#<start id>-<end id>
```

For example, if the text refers to a group of two angels it is annotated with `Q235113#1-2` with `Q235113` being the Wikidata identifier for the concept `angel`.

If a second group with four different angels is mentioned in the text, the count continues like this `Q235113#3-6`

<!-- Beispiel 3-->
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/fe858d98-02f4-482a-9cf1-15e01693732e">
    <img src="https://github.com/user-attachments/assets/fe858d98-02f4-482a-9cf1-15e01693732e">
  </a>
  <div class="zoom-caption">
    "It depicts Christ standing on a double basement, keeping the Cross.Behind him is a damask cloth held by two angels and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine.In the foreground are four angels with the Instruments of the Passion: from the left, the Holy Lance, the nails from the cross, the sticks of the Flagellation and the Holy Sponge.On the cross is the Crown of Thorns and the inscription "INRI".Blood rays spring up from Christ's wounds, ending in the Holy Chalice and turning themselves into the sacramental bread.The sacrifice of Christ is also alluded to by the deer which is being slaughtered by a leopard on the lawn on the right."
  </div>
</div>

**(2) For groups comprising mmore than five entities**, please follow this annotation scheme: 

```
g:<WikidataID>
```

Sticking to the example above, but assuming that there are two different groups each with more than five members, the annotation would turn to `g:Q235113#1` and `g:Q235113#2` to differentiate between the two groups. 

<!-- Beispiel 4-->
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/42831b8d-7c43-432e-ba2e-883f13d845d8">
    <img src="https://github.com/user-attachments/assets/42831b8d-7c43-432e-ba2e-883f13d845d8">
  </a>
  <div class="zoom-caption">
    "The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21."
  </div>
</div>

### 2.4 Synonyms and Symbolic Representations 

As mentioned in [Step 2.1](#21-annotate-text-spans), the description might refer to the same entity using different surface forms (e.g., `Jesus` vs. `Jesus Christ`), synonyms (`Mary` vs. `mother of Jesus`), symbolisms (e.g., `Jupiter` in form of a `swan`), etc. 

Please add these alternative representations to the span annotated in [Step 2.2](#22-assigning-a-wikidata-identifier) following these steps: 
1. Click on the span comprising another representation of the entity.

   <div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/89a7a5b9-1d28-4275-9f28-9fc78edbf005">
    <img src="https://github.com/user-attachments/assets/89a7a5b9-1d28-4275-9f28-9fc78edbf005">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>
2. Click on the button "create relation between regions" (as highlighted in the image below).

<div class="zoom-container">
  <a 
    class="zoom-img"![make_relation_2](https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197)
    href="https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197">
    <img src="https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>
3. Click on the span annotated with the unique identifier according to [Step 2.2](#22-assigning-a-wikidata-identifier).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/89e0713d-d471-4c12-bffb-c1409b68a28a">
    <img src="https://github.com/user-attachments/assets/89e0713d-d471-4c12-bffb-c1409b68a28a">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>
This adds a relation between the two spans. To determine the relation type please proceed as follows: 

4. Click on the tab "Relations" in the bottom right of the _text annotation workspace_.
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/e1ee8de2-a320-4b0e-adcd-9fe53cfeeeb3">
    <img src="https://github.com/user-attachments/assets/e1ee8de2-a320-4b0e-adcd-9fe53cfeeeb3">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>
5. Assign a suitable relation from the drop-down list, e.g., `same as`, `symbolizes` 

<div class="zoom-container">
  <a 
    class="zoom-img"![make_relation_5]
    href="https://github.com/user-attachments/assets/0d5b82a3-1f43-4aad-b792-39efa652000c">
    <img src="https://github.com/user-attachments/assets/0d5b82a3-1f43-4aad-b792-39efa652000c">
  </a>
  <div class="zoom-caption">
    "It shows a scene from the famous story of Saint George and the dragon.On the right George is spearing the beast, and on the left the princess is using her belt as a leash to take the dragon up to the town.The eye in the storm gathering on the right of Saint George is lined up with his spear showing there has been divine intervention."
  </div>
</div>

> [!NOTE]
> If the relation is uncertain, please also pick `utc` from the drop-down list. 
> For images, please use the 'uncertain?' checkmark. An example is shown below.

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d">
    <img src="https://github.com/user-attachments/assets/900adaad-2f0c-4681-86d9-c2d4dbe1698d">
  </a>
  <div class="zoom-caption">
    The text "[...] an old female saint (Anne or Elisabeth)" mentions a `female saint` as entity. The names `Anne` or `Elisabeth` are spans with an uncertain `same_as` relation to the entity which for which the `uncertain` tag should be added.
  </div>
</div>


## 3. Annotating the Image

This steps aims at annotating the distinct image regions that depicts the entity. 
For this purpose, two annotation steps are required. 

1. [Drawing a bounding box](#31-draw-bounding-box) entailing the whole entity or entity group. 
2. [Assigning a bounding box id](#32-assign-the-bounding-box-id) that contains the [unique identifier](#22-assign-a-relation-type) and [instance number](#23-assigning-instance-numbers)


### 3.1 Draw Bounding Boxes

Bounding boxes are used to annotate the entity location within the image. The guidelines below describe how to draw them into the images.

Please select the bounding box tool in the _image annotation workspace_ and draw a bounding box by holding down the left mouse button. 
Note that you can also refine the bounding box later by clicking on the edge and borders of the bounding box.

The **bounding box should cover the entire entity (group)** in the image including clothings, accessoirs, halos, etc. as shown in the example below. 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6">
    <img src="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6">
  </a>
</div>

While most entities are clearly visible and thus easy to locate in this example, drawing the bounding box can also be very challenging. 
Please read the guidelines below to understand how to handle [occlusions](#handling-of-occlusions), [entity groups](#handling-of-entity-groups), [body parts](#handling-of-body-parts), [sceneries](#handling-of-sceneries), and [background concepts](#handling-background-concepts).  


#### Handling of Occlusions 

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f">
    <img src="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f">
  </a>
</div>

This examples shows entities that are heavily occluded by the table they are sitting at. 
In these cases, please try to estimate the correct position and dimension of the entity and draw the bounding box accordingly. 


#### Handling of Entity Groups

As described in [Step 1](#1-identify-art-historical-entities), every entity mentioned in the text that maps to a unique image region is treated as a separate entity. 
This also includes larger groups of entities, such as large crowds. 
These groups can be very difficult to locate in the image as it might be unclear which entities belong to group and which are not, for example. 

> [!CAUTION]
> TODO Daniel: Bis hierhin habe ich es überarbeitet, bitte übernimm noch die anderen Fälle. Du kannst dich hier rein auf das Zeichnen der Bbox fokussieren, wie Gruppen anntotiert werden, wird nun vorher ausführlich beschrieben. Ich habe auch noch das Handling von Szenerien eingefügt, das ist doch sicher auch recht schwierig oder?


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

#### Handling of Body parts 
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

#### Handling of Sceneries


#### Handling Background Concepts 
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


### 3.2 Assign the Bounding Box Id

The last step is to assign the unique identifier created according to [Step 2.2](#22-assigning-a-wikidata-identifier) and [Step 2.3](#23-assigning-instance-numbers) to the bounding box. 

> [!CAUTION]
> TODO Daniel: Bitte beschreiben was man in Label Studio machen muss um die Annotation anzulegen.

By pressing on the bounding box, you can open the annotation menu. 
Use the `id` text field and insert the corresponding identifier of the entity from [Step 2.3](#23-assigning-instance-numbers). 

This step concludes the annotation for the current entity, by linking it to the text annotation and the [synonyms](#24-synonyms-and-symbolic-representations).
Repeat the annotation from [Step 1](#1-identify-art-historical-entities) to label the remaining entities in the artwork. 

> [!CAUTION]
> TODO Daniel: Ab hier habe ich alles auskommentiert. Ich bin mir nicht sicher ob davon jetzt alles durch die Guidelines abgedeckt ist. 
> Falls nichts, ergänze es an der passenden Stelle
> Die Beispiele kannst du evlt. noch in den neuen Guideline-Text integrieren. 


<!----------

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
---------->
