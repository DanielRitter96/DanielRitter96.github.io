# Guidelines for Relation Extraction

The goal of the relation extraction task is to identify and annotate **directed, visible interactions** between two art-historical entities that are **already annotated in both the text and the image**. These relations must be **visually evident in the artwork** and **supported by the image composition**, as inferred from the bounding boxes drawn during entity extraction.

> [!NOTE]  
> Some example images may already include relation annotations (i.e., arrows between bounding boxes). For this task, you can disregard these as they are placeholders and will be re-annotated according to the guidelines below.

## 1. Identify Visible Interactions

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

## 2. Annotate Relations in the Image

Once a visible interaction is identified, annotate it using the **image annotation tool** in Label Studio. The process involves three steps:

### 2.1 Create a Directed Relation

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

### 2.2 Assign a Relation Type

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

## 3. Unified Guidelines for Relation Annotation
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
## 4. Handle Information Disparity Between Text and Image
The text and image may not always convey the same level of detail. To account for this, relation annotations are prefixed to indicate the source of the information:

- No prefix: The relation is present in both the text and the image.
Example: "Venus arrives at the shore" — both the text and image show Venus stepping onto land.

<div class="zoom-container"> <a class="zoom-img" href="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"> <img src="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"> </a> <div class="zoom-caption"> "It depicts the goddess Venus <i>arriving at the shore</i> after her birth, when she had <i>emerged from the sea</i> fully-grown [...]." </div> </div>

- img_inf prefix: The relation is only visible in the image, not explicitly stated in the text.
Example: An angel touching a throne — the text may mention the throne and the angel, but not the physical contact.

>[!CAUTION]
>The img_inf prefix must only be used when both entities are >present in the text.
>If one entity is missing from the text, the relation cannot be >inferred, even if it is visible in the image.

<div class="zoom-container">
  <a class="zoom-img" href="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"> 
    <img src="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"> 
  </a> 
  <div class="zoom-caption"> 
    "[...] having the <i>angels</i> around the Virgin simply placed one above the other, rather than being spatially arranged. The <i>throne</i> [...]." 
  </div>
</div>

>[!TIP]
>Use img_inf to capture visual details that are not described but >clearly depicted — such as gestures, contact, or symbolic actions.


---

## 5. Annotate Hierarchical and Part-of Relations

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

## 6. Handle Transitive Relations

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


## Miscellaneous 


### Addition to inferred relations
If relations are inferred, it may be possible and logical to infer the respective most applicable relation for both of entities. For example the  figure in [More specific relations](#more-specific-relations) shows that for the left child, it could be possible for it to sit on his mother, while it could also be possible for the mother to hold the child. Therefore all possibilities have to be inferred. However, only the active forms. That means, that  child;  held_by; mother is not inferred.---------->