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
> For this task, you can disregard these relations as they are annotated in the next task for [relation extraction](relation-extraction).

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

If you have identified an **entity in the text that clearly corresponds to a distinct image region**, follow the steps below to annotate it within the [text](#2-annotating-entities-in-text) and [image](#3-annotating-the-images). 

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
    "[...] He is surrounded by other men of varying ages, most showing emotional distress, unlike the stoic old man.The young man handing him the cup looks the other way, with his face in his free hand. [...]"
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
    "[...] held by two angels and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine.In the foreground are four angels with the Instruments of the Passion:[...]."
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
</div>
2. Click on the button "create relation between regions" (as highlighted in the image below).

<div class="zoom-container">
  <a 
    class="zoom-img"![make_relation_2](https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197)
    href="https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197">
    <img src="https://github.com/user-attachments/assets/7b307896-2acb-4e92-91bd-c17ded333197">
  </a>
</div>
3. Click on the span annotated with the unique identifier according to [Step 2.2](#22-assigning-a-wikidata-identifier).

<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/89e0713d-d471-4c12-bffb-c1409b68a28a">
    <img src="https://github.com/user-attachments/assets/89e0713d-d471-4c12-bffb-c1409b68a28a">
  </a>
</div>
This adds a relation between the two spans. To determine the relation type please proceed as follows: 

4. Click on the tab "Relations" in the bottom right of the _text annotation workspace_.
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/e1ee8de2-a320-4b0e-adcd-9fe53cfeeeb3">
    <img src="https://github.com/user-attachments/assets/e1ee8de2-a320-4b0e-adcd-9fe53cfeeeb3">
  </a>
</div>
5. Assign a suitable relation from the drop-down list, e.g., `same as`, `symbolizes` 

<div class="zoom-container">
  <a 
    class="zoom-img"![make_relation_5]
    href="https://github.com/user-attachments/assets/0d5b82a3-1f43-4aad-b792-39efa652000c">
    <img src="https://github.com/user-attachments/assets/0d5b82a3-1f43-4aad-b792-39efa652000c">
  </a>
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

If either of the two conditions as met, an entity has to be annotated as a **group**:
- The entities are **not individually named** in the text and The number of visually overlapping entities of the same type **reaches or exceeds five**.
- Multiple entities of the same type are **closely clustered** and visually indistinguishable as individuals (e.g., a large group of flowers, a crowd of anonymous figures, or a swarm of birds).

> [!NOTE]  
> Even if the text refers to a collective entity (e.g., `the blessed`, `the damned`), the group must be annotated as a single bounding box **only if** the visual representation consists of five or more overlapping individuals and they cannot be meaningfully disambiguated as separate entities.

The figure below shows the blessed on the left and the damned on the right side of the painting. Since both are large, indistinct crowds of figures that exceed the threshold of five overlapping individuals and are not individually named, they are annotated as **single group entities**.


<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/79c4901a-073d-4f67-b05f-6520d566ee5d">
    <img src="https://github.com/user-attachments/assets/79c4901a-073d-4f67-b05f-6520d566ee5d">
  </a>
  <div class="zoom-caption">
    "[...] Rising up the left hand side of the painting (at Jesus' right hand) are the <i>blessed</i>, whilst the <i>damned</i> fall into hell on the right hand side [...]."
  </div>
</div>

> [!TIP]  
> When annotating large groups, ensure the bounding box encompasses the **entire visual cluster** of entities, even if some parts are partially occluded or overlapping. Do not split the group into multiple boxes unless the entities are clearly distinguishable and individually named.

---

#### Handling of Body Parts

Body parts (e.g., hands, feet, arms, heads) are **not treated as independent entities** and must **not** be annotated with separate bounding boxes.

If a description refers to a body part (e.g., `on her lap`, `holding a book`, `pointing to Christ`), the bounding box must be drawn around the **entire person** to which the body part belongs.

> [!WARNING]  
> Do **not** draw a bounding box that spans only a limb or torso. The entity remains the full individual, regardless of the specific body part mentioned in the text.

The figure below shows Mary with the Christ Child on her lap. Although the description emphasizes the child’s position on her lap, the bounding box must cover **Mary as a whole**, since her lap is not a separate entity.


<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/beab2356-23d1-470e-914e-e00e7eef2974">
    <img src="https://github.com/user-attachments/assets/beab2356-23d1-470e-914e-e00e7eef2974">
  </a>
  <div class="zoom-caption">
    "[...] The Virgin Mary is enthroned at the centre of the semicircular space, which most likely represents a church interior, with the <i>Christ Child on her lap</i>.[...]."
  </div>
</div>

<!--
> [!NOTE]  
> If the text explicitly refers to a body part as a symbolic or independent entity (e.g., `the hand of God`, `the eye of God`), then it may be annotated as a distinct entity **only if** it is visually distinct and clearly separable from the rest of the figure. Otherwise, treat it as part of the whole.
-->

<!--
---
#### Handling of Sceneries

Sceneries (e.g., landscapes, architectural interiors, cityscapes, natural environments) are **annotated as single entity** if they are **visually coherent**, **spatially unified**, and **referenced as a whole** in the text.

> [!CAUTION]  
> Do **not** split a continuous scenery into multiple bounding boxes based on minor visual differences (e.g., separate trees, distant hills, or architectural elements). Instead, draw one bounding box that encompasses the **entire scene** as a single visual unit.

For example, if the text refers to a "mountainous landscape in deep perspective" or "a church interior with a semicircular apse", the bounding box should cover the **entire visual space** of that setting, even if it includes multiple architectural or natural elements.

> [!TIP]  
> Use the context of the description to determine whether the scenery is meant to be treated as a single entity. If the text refers to it as a unified environment (e.g., "the background landscape", "the interior of the chapel"), annotate it as one.
-->
---
#### Handling of Background Concepts

Background entities are **equally important** as foreground entities and must be annotated with the same level of precision.

When a background element is **visually distinct** and **referenced in the text**, it must be annotated as a **separate entity**, even if it lies behind other figures or objects.

> [!NOTE]  
> **Do not** treat the background as a single monolithic region. Instead, annotate **each visually distinct background element individually** (e.g., mountains, hills, trees, architectural structures, distant cityscapes), **provided they are clearly identifiable and referenced in the text**.

However, **the bounding box for each background element must be drawn as a continuous, unbroken region** — **even if it overlaps with foreground objects**.

<!--
> [!CAUTION]  
> **Do not** split a background element’s bounding box into multiple fragments due to occlusion by foreground figures. The box must cover the **entire visual extent** of the background element, including parts that may be partially hidden.
-->

The figure below shows a complex background with mountains, hills, and a distant cityscape. Although these elements are partially obscured by foreground figures (e.g., Saint Jerome, Francis of Assisi), each must be annotated **individually** as a distinct entity. The bounding boxes for the mountains and hills must **remain continuous**, even if they include parts of the background that are overlapped by foreground figures. For the sake of clarity, only the annotations for the mountains are shown.


<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/fc4caf3a-d7af-4c27-b542-0d99e693a2bf">
    <img src="https://github.com/user-attachments/assets/fc4caf3a-d7af-4c27-b542-0d99e693a2bf">
  </a>
  <div class="zoom-caption">
    "[...] The Virgin Mary is enthroned at the centre of the semicircular space, which most likely represents a church interior, with the <i>Christ Child on her lap</i>.[...]."
  </div>
</div>

<!--
> [!TIP]  
> Use the text description to determine whether a background element is meant to be treated as a distinct entity. If the text refers to it specifically (e.g., "the distant mountains", "the hillside in the background"), annotate it individually — even if it appears behind other figures.

> [!WARNING]  
> **Never** break a bounding box into multiple parts because a foreground object overlaps it. The box must represent the **complete visual extent** of the background element, regardless of occlusion.
-->

---

### 3.2 Assign the Bounding Box Id

The last step is to assign the unique identifier created according to [Step 2.2](#22-assigning-a-wikidata-identifier) and [Step 2.3](#23-assigning-instance-numbers) to the bounding box. 

By pressing on the bounding box, you can open the annotation menu below the image. 
Use the `name` text field and insert the corresponding identifier of the entity from [Step 2.3](#23-assigning-instance-numbers).
The following field is used for the wikidataid and the last field for the instance number.
Finally, at the end a checkmark can be pressed to express that the assigned information is described as uncertain within the description.

The figures below show examples before and after filling them out:
<div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/15436c10-abb3-4bce-9c32-b9e0c4a2653a">
    <img src="https://github.com/user-attachments/assets/15436c10-abb3-4bce-9c32-b9e0c4a2653a">
  </a>
  <div class="zoom-caption">
    Mask to assign entities with their id, wikidata-link and instance number. 
  </div>
</div>

 <div class="zoom-container">
  <a 
    class="zoom-img"
    href="https://github.com/user-attachments/assets/8dc1ad66-c203-44a5-b259-811975bd1589">
    <img src="https://github.com/user-attachments/assets/8dc1ad66-c203-44a5-b259-811975bd1589">
  </a>
  <div class="zoom-caption">
    Filled out mask to assigning 'Mary', <a href="https://www.wikidata.org/wiki/Q345">Q345</a> and '1' to the entity. 
  </div>
</div>

This step concludes the annotation for the current entity, by linking it to the text annotation and the [synonyms](#24-synonyms-and-symbolic-representations).
Repeat the annotation from [Step 1](#1-identify-art-historical-entities) to label the remaining entities in the artwork. 

