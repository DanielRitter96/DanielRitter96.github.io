# Annotation guidelines
## Task
### Entities
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated.
For the images, annotations are done through bounding boxes that span the entire entity, even if it includes other entities. 

### Relations
The followup task after the entities are annotated is to annotate the relations that two entites share between each oher. Those relation annotations are limited to the images. That means no relation annotation are made for the descriptions.



The following figure shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio. You can see that only the entities are marked for the textual descriptions. For that only the subject field is necessary. The Qid at the beginning is not important and is not annotated. At the right, the image annotation shows boxes for every named entity and the relations between them with prefixes. 
How to proceed in regular but also in special cases are described in more detail in the guidelines below.  
<table>

  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/0b98c71a-4e2c-4c39-a22f-1101ddad6479"><img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/0b98c71a-4e2c-4c39-a22f-1101ddad6479" class="zoom-img"></a>
      </figure>
      <figcaption>This figures shows both annotation types. The textual named entity annotation is on the left, while the scene graph annotations</figcaption>
    </td>
  </tr>
</table>

### Prefixes
There are cases in which the information richness of the description and the image vary. Some descriptions describe meta-information and add more details than what can be observed within the image. However, with those cases being the only exception, the image always holds more information than the description. To address this, we differentiate whether the relation is from the text or the image. Additionally, there are numeroues cases in which the later discussed conditions are met to *infer* relations from the image or text alone. 
In other rare cases, descriptions cannot with full certainty determine the enitities names or roles, leading to uncertain guesses. Furthermore, descriptions are often written in a way to make the text sound better, e.g., synonyms are used to describe the same entity in different ways. Similary to that, entities are often described to symbolize different entities. Finally, there are entities that describe an event or action rather than a person or object. Those can have additional entities within but are otherwise missing in the description. To deal with these different scenarios, we use prefixes in order to make it obvious which scenario a relation or enitity falls under.     
Most prefixes are for the entities, others for the relations and few are for both applicable. 

The used prefixes are:
- None - no mark is set if the relation is present in the image and the description.
- img_inf - marked for every relation that is inferred from the image
- impl - marked for every entity that is implied from event entities
- syn - marked for every relation that declares that two entities are synonyms. Note: that focuses on the entity
- sym - marked for every relation that declares that one entity symbolizes the other. Note: that focuses on the entity
- uct - marked for every uncertain entity or relation that is shows uncertainty about the relation between two entities

Since we have two different tasks, (i) annotation of the entities and (ii) annotation of the shared relations, we split the prefixes in the respective parts.


## Entities
As already described above, the task is to mark the entities in both the text and the image at the same time. The entities that are marked in the image have to be present in the description as well. The first image shows an example with the tool label-studio.
The steps to follow are described below. The example images here are fully annotated once, therefore they might already have the relations annotated. For this "Entities" section, please focus only on the boxes itself.
### Spans
The spans in both the textual and image annotations need to be as accurate as possible. The textual annotations are trivial, just mark the whole word and nothing but the word, however the box annotations within the images are more tricky. They need to be as accurate as possible, which means that the entirety of the body has to be in the box. This includes halos as much as it includes clothings, even if different objects would be partially annotated as well.  Few exceptions are made if body parts are partially obstructed by other objects and e.g. in group scenes hard to assign to the correct person.
The first image in the figure below shows a simple case to assign obstructed body parts whereas the second shows a hard one. Since this particular example shows a small crowd close together they are annotated in a group. More on that follows later under the group annotation section.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6"><img alt="span1" src="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] <i>an old female saint (Anne or Elisabeth)</i> and an old male saint (Joachim or Joseph). On the left are <i>a female saint (possibly Mary Magdalene)</i> [...]."</figcaption>
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

Note that the annotation of the id at the beginning of each description is not required. Those ids are not part of the actual descriptions.

### Named box
The boxes have their own class names. For example, the box drawn over Jesus Christ is called "Jesus" or one of the usual alias of him. DO NOT use different boxes of the same person, i.e. annotating Jesus as "Jesus" is as correct as "Christ". 
The figure below shows Mary with infant Jesus and the annotation box is drawn over her. At the right, the name of the box can be seen as "Virgin" which is a usual alias for her. 

<table>
  <tr>
    <td> 
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/45a50694-009d-4edd-b73c-ec28460adffc"><img alt="named_box" src="https://github.com/user-attachments/assets/45a50694-009d-4edd-b73c-ec28460adffc" /></a>
      </figure>
      <figcaption>"[...] Rising up the left hand side of the painting (at Jesus' right hand) are the blessed, whilst the damned fall into hell on the right hand side.[...]."</figcaption>
    </td>
  </tr>
</table>


### Wikidata linking
Every entity has to be linked as closely as possible to the correct Wikidata page. If it is a group annotation then the number of individual entities are given before the linking. The figure below shows how such a linking looks like for the group of "blessed", which in this image are more than 10 people. The "G(n):" denotion  is only used in groups and since this group is unique the instance count denoted with the '\#' is 1. More on instances is in the next point.  
For a *n* that is smaller than 10, please count the individuals and from 10 onwards just mark 10+. Also, please do not use any whitespaces " ". 

<table> 
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/bbb5768d-e9ce-46ea-a3e6-0b0cef2bbb39"><img alt="group_instance" src="https://github.com/user-attachments/assets/b9712462-6351-4fa0-823b-feb2bfdec355"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] Rising up the left hand side of the painting (at Jesus' right hand) are the blessed, whilst the damned fall into hell on the right hand side.[...]."</figcaption>
    </td>
  </tr>
</table>

### Instances
For every entity given in the text, there might be more than just one in the image. If it is clear that all of the present entities in the image are described, then annotations need to specifically count each instance of the entity. This ensures that the correctness and completeness.
In first figure below, the instance count for the selected angel is displayed as 2 since it is the second angel. There is no particular rule regarding the orders or where to start counting. However, the instances have to match those described in the text. 
The second figure highlights a second group of angels in the foreground. Those angels refer to the ones standing next to Jesus.
Taking this information into account, the instance counts in the linkings for the text needs to fit those in the painting. 
The expected linking for the flying angels would be "https://www.wikidata.org/wiki/Q235113\#1-2" and for the foreground angels it would be www.wikidata.org/wiki/Q235113\#3-6. Both would be for the corresponding *angels* term. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/459e7040-88bc-4b48-a371-d284543e9e46"><img alt="instances1" src="https://github.com/user-attachments/assets/459e7040-88bc-4b48-a371-d284543e9e46"  class="zoom-img"></a>
      </figure>
      <figcaption>"It depicts Christ standing on a double basement, keeping the Cross. <i>Behind him is a damask cloth held by two angels</i> and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. In the foreground are four angels [...]."</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/ebc373fc-b989-4e15-80db-554919f1ed95"><img alt="instances2" src="https://github.com/user-attachments/assets/ebc373fc-b989-4e15-80db-554919f1ed95"  class="zoom-img"></a>
      </figure>
      <figcaption>"It depicts Christ standing on a double basement, keeping the Cross. Behind him is a damask cloth held by two angels and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. <i>In the foreground are four angels</i> [...]."</figcaption>
    </td>
  </tr>
</table>


### No meta information
Entities  that come from meta-information, and are therefore not present in the image are not annotated within the text. This focuses mainly on information such as the painter, the name of the painting, etc. It does not however include entities that are meant be e.g. named groups. So if people belong to certain classes, groups or occupations, those annotations are made if it is distinctly matchable. 
 The same text-image pair shown in figure below has no annotations with neither maesà nor with Cimabue or the Basilica of San Francesco di Assisi. Note the list of entities in the right part of the figure.
Also note that these are mostly relevant for the textual annotation rather than the image one. To see how the text annotation looks like, please see the left part of the first figure.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/040d6a3d-7f68-4007-b919-3a396034eb55"><img alt="no_assisi" src="https://github.com/user-attachments/assets/040d6a3d-7f68-4007-b919-3a396034eb55"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...]. The throne is similar to the <i>Maestà painted by Cimabue</i> in the Basilica of San Francesco di Assisi (1288–1292)."</figcaption>
    </td>
  </tr>
</table>

### At least one entity
As long as there is at least one entity given, the pair is not skipped. 
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


### Group annotations
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

### Individuals are part of a group
If there are groups with distinguishable individuals, like in the below figure, then they have to have the _part\_of_ relation to the group with the *img_inf* prefix. Keep in mind that groups can have other relations as well.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/e0a3a60f-fdbf-4fbc-96e0-80dae6825822"><img alt="part_of" src="https://github.com/user-attachments/assets/e0a3a60f-fdbf-4fbc-96e0-80dae6825822"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."</figcaption>
    </td>
  </tr>
</table>

### Big bounding boxes
Big bounding boxes that are drawn all over the image are allowed if a entity is a scene or if a group of people need to be annotated.
In the below figure, in order to capture the three archangels within the painting, a box that spans over the entire image is needed.  The fact that the box is barely visible but still marked as such, as indicated one the right list of highlighted entities, shows that the box spans over the entire image.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/a606a077-728c-4fbd-af65-151e041823b9"><img alt="big_box" src="https://github.com/user-attachments/assets/a606a077-728c-4fbd-af65-151e041823b9"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."</figcaption>
    </td>
  </tr>
</table>


### Entities with further information
Some descriptions describe a entity at some point and then at a later point give more details. For example, the text may say a person wears some sort of clothes. Later it describes those clothes in more detail naming particular parts like hats.
In these cases all entities need to be annotated, the generic one and the more detailed entities. Furthermore those more detailed parts meed to be marked with the _part\_of_ relation
The figure below shows the person on the left wearing a _vestment_. This _vestment_ is later described as _cope_ and _mitre_, leading to him also wearing a _cope_ and a _mitre_. Finally, _Mitre_ and _cope_ are also _part\_of_ the _vestment_. The list of relations on the right shows one paritcular *img_inf part_of* relation with the cope and the vestment.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/095394aa-bb66-4a5a-ba32-861ccdcd9dd8"><img alt="cope" src="https://github.com/user-attachments/assets/095394aa-bb66-4a5a-ba32-861ccdcd9dd8" class="zoom-img"></a>
      </figure>
      <figcaption>"[...] Saint Donatian, dressed in brightly coloured <i>vestments</i>, stands to the left. [...] The precision of the detail achieved is especially noticeable in the rendering of threads of St. Donatian's blue and golden embroidered <i>cope and mitre</i>, in the weave of the oriental carpet, and in the stubble and <i>veins on van der Paele's aging face</i>."</figcaption>
    </td>
  </tr>
</table>

### Not to detailed
Descriptions can describe the visual too detailed. Those entities and relations are not annotated. The same example shown in above figure describes the face of the kneeling person in too much detail describing the veins on his face. This relation is not annotated.

### Body parts 
Body parts are not treated as their own entity and therefore can also not be part of a relation. Those body parts will be treated as the whole person. E.g. _child sits in her lap_ will be treated as child sits on mother.
The figure below shows the same example image as before with different annotations, focusing on Mary and the Christ child. While the descriptions describes Christ siting on her lap, the annotation is still done for Mary as a whole.


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


### Background objects
Background entities are of equal importance as foreground entities, however, background entities that hold little importance are not instantiated. The figure below shows how the mountains in the background are annotated and how the wikidata linking is done. The only difference is the missing instance. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/c2859c1f-2d7e-4e3d-8136-5d41491720ba"><img alt="background1" src="https://github.com/user-attachments/assets/c2859c1f-2d7e-4e3d-8136-5d41491720ba"  class="zoom-img"></a>
      </figure>
      <figcaption>"[...] The landscape background is typical of Perugino, <i>with mountains and hills in deep perspective</i>. To the left of the cross stand saint Jerome (inspiration for the Jesuati) and Francis of Assisi. To its right are Mary Magdalene touching Christ's feet, Blessed Giovanni Colombini (founder of the Jesuati) and John the Baptist (patron saint of Florence). John points to Christ, whilst Jerome has thrown down his cardinal's cap at the foot of the cross, symbolising his rejection of earthly honours. [...]."</figcaption>
    </td>
  </tr>
</table>

### Synonyms
Often times the description uses synonyms to describe the same entity in different ways. This is marked with the prefix \textit{syn}.
 The figure with the dragon further down is an example. It shows saint George spearing a dragon. The description of the image also mentions a beast and refers to the dragon introducing a synonym.
The annotations are done by copying the box of the dragon and renaming it as beast. Finally the *syn* prefix with a simple *is* relation is drawn between them. Note that the boxes will end up exactly on top of each other. 

### Symbolize
Similarly, to the synonymy case, in the same example figure, the belt is described to symbolize a leash. 
Following the same approach the relation between the belt and leash (renamed belt copy) has the prefix *sym* with the most fittong simple relation e.g. *used as* or *is*.

### Implications
Furthermore, the phrase *story of Saint George and the dragon* in the same example figure below is in itself a entity that also implies the existence other entities. Those are *Saint George* together with *dragon*. This leads to three annotations instead of just one. The correct prefix for these cases is *impl* and since this applies to the entities rather than the relations it has be prepended on the entity meta string. 

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/947e31e3-5c81-44ea-a27e-f1517b0d84c0"><img alt="dragon" src="https://github.com/user-attachments/assets/947e31e3-5c81-44ea-a27e-f1517b0d84c0"  class="zoom-img"></a>
      </figure>
      <figcaption> "It shows a scene from the famous <i>story of Saint George and the dragon</i>. On the right George is spearing the <i>beast</i>, and on the left the princess is using her <i>belt as a leash</i> to take the dragon up to the town.[...]."</figcaption>
    </td>
  </tr>
</table>


### Uncertainty
In some cases, the description is not giving certain information about e.g. people present in the image. In those cases, we use the *uct* prefix to express that uncertainty. 
if the image-text pair consists of only uncertain entities, said pair is skipped. The *uct* prefix applies to both the entities and the relations.
The figure below shows an example of this. Note the highlighted entities on the right side of the image. The saint with the 8 refers to the old woman on the right. Again, this follows the same approach as in the synonym and symbolize cases. Therefore, the boxes are exactly on top of each other. In this case the relations are also directly on top of each other making it seem like there is only one other box for the old woman when there are in fact two.


<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/9fea82b2-5a66-4c06-85eb-4b68babd7d90" ><img alt="maybe" src="https://github.com/user-attachments/assets/9fea82b2-5a66-4c06-85eb-4b68babd7d90"  class="zoom-img"></a>
      </figure>
      <figcaption> "[...] <i>an old female saint (Anne or Elisabeth)</i> and an old male saint (Joachim or Joseph). On the left are <i>a female saint (possibly Mary Magdalene)</i> [...]."</figcaption>
    </td>
  </tr>
</table>







## Relations
As mentioned in the beginning, the second task is to mark the relations between two entities, *only* in the image. The relations that are marked do not necessarily have to be present in the description. However the corresponding entities have to. Again, The first image's right side shows an example with the tool label-studio.
The steps to follow are described below. 

### Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there is the option to use either no prefix before the relation or to select the *img_inf* relation. If the relation is present both in the description and image then no prefiy is used, since by using none of them it is implied that it is present in both rather than in none of them. The other case is described in the point below.
For example, in the figure below with and excerpt of its description in the caption shows the triplet: "Venus *arrive* shore". 


<table>
  <tr>
    <td>
    <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4"><img alt="txt+img" src="https://github.com/user-attachments/assets/eeb54add-0b5f-42b9-abc1-c09c08005fd4" class="zoom-img"></a>
        </figure>
      <figcaption>"it depicts the goddess Venus arriving at the shore after her birth, when <i>she had emerged from the sea</i> fully-grown [...]."</figcaption>
    </td>
  </tr>
</table>

### No unseen relations
Just like the entities that are not present in the image, the relations that are not visible in the image are also not annotated. The same figure above
shows that the goddess Venus *has arrived* at the shore. It does not, however, show that Venus emerged from the sea. She is depicted on a clam at the shore. The described event has already taken place and is therefore not present in the image. 
Remember: inferring this relation would mean the relation is inferred based on the description and not from the image. Infereations are only allowed based on the images.


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
        <a href="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531"><img alt="inf" src=<img width="670" height="1091" alt="inf" src="https://github.com/user-attachments/assets/38a8238c-ed19-42e2-9c32-73c9446d3531" class="zoom-img"></a>
      </figure>
      <figcaption> "[...] having the <i>angels</i> around the Virgin simply placed one above the other, rather than being spatially arranged. The <i>throne</i> [...]."</figcaption>
    </td>
  </tr>
</table>

### More specific relations
Similar to the *inf* prefix that infers relations, there are cases where the relations are described with very little detail i.e. words like *with* are used when for example *holds* would be more fitting. If the image contains these more detailed information then also include those with the *img* and *inf* prefixes. For that the entity annotation box has to be copied and marked their linking has to be marked with an underscore "\_".  
The figure below shows an example. Both babies have the *with* relation with the respective adult, but also at the same time the adults have the more detailed holds relation inferred. Pay close attention to the linking on the right. The entities with the inferred relation end with the underscore.


<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/55bd74f8-2d30-4b4f-8e75-d416e15ca9c8"><img alt="with_or_hold" src="https://github.com/user-attachments/assets/55bd74f8-2d30-4b4f-8e75-d416e15ca9c8"  class="zoom-img"></a>
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


### No spatial annotations
Spatial annotations are not annotated since they harbour little information and can be inferred by the location of the boxes. Additionally, relations such as _together with_ are treated as spatial information. An exception for that is discussed later. The below figure with the emphasis on the caption shows that those relations are left out.

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





### Miscellaneous 

#### Long tail entities
Some entities can be longer such as *Episodes of the lives of St. Benedict* or *Throne of Jesus and Madonna*. Those have to be annotated as one entity without extracting other entities like *St. Benedict*, *Jesus* or *Madonna*.

#### Actions or Events
As earlier described, Events that take place currently are annotated however those that must have already past, since those can not be seen, are not annotated. Also, similar to the point above, inferring that someone does something to someone else just because the event or action may hint to it is not allowed. For example, inferences from *Coronation of the Virgin*  to the entity *Jesus* and the relation *Jesus; crowns; the Virgin* are not allowed. However since the word *the Virgin* is within the event itself inferring the existence of her as a entity in the painting is allowed and annotated.


#### Addition to inferred relations
If relations are inferred, it may be possible and logical to infer the respective most applicable relation for both of entities. For example the  figure in [More specific relations](#more-specific-relations) shows that for the left child, it could be possible for it to sit on his mother, while it could also be possible for the mother to hold the child. Therefore all possibilities have to be inferred. However, only the active form i.e. child;  held_b; mother is not inferred.

#### Re-describptions 
In rare cases, descriptions describe a entity with a specific relation and at a later re-describe said entity with a different relation. In such cases, to ensure that all information is kept, annotate all relations.

#### Relations between objects and body parts
According to the [Body parts](#body-parts) section, relations such as, *earring; in; ear* have to be formed to *earring; in; woman*. However, this relation describes the situation to inaccuratly and is thererfor not annotated. This does not, however, bans it from inferences.




