# Annotation guidelines
## Task
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated. The rules that need to be followed in order to achieve the maximum information richness and maintain consistency are listed below. The figure below shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio.
{% raw %}
|<div class="zoom-container"><img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/071a21c4-4bc3-4d0b-b97a-93725c499586" class="zoom-img"></div>|
{% endraw %}
|:--:| 
| This figures shows both annotation types. The textual named entity annotation is on the left, while the scene graph annotations |

## Prefixes
### Prefix
The prefixes that are used are
- txt - marked for every relation that is present in the description
- img - marked for every relation that is present in the image
- inf - marked for every relation that is inferred from the image
- impl - marked for every entity that is implied from event entities
- syn - marked for every relation that declares that two entities are synonyms
- sym - marked for every relation that declares that one entity symbolizes the other
- maybe - marked for every relation that is shows uncertainty about the relation between two entities

### Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there are the two prefixes  *txt* and *img*. For every annotated relation, taken directly from the text itself (e.g. "Angels *around* the Virgin"),
we also mark whether the information is within the text (*txt* *around*), the image (*img* *around*) or present in both modalities (*txt* *img* *around*). 
The figure below shows an example image with an 
excerpt of its description in the caption. Since both modalities contain the information about the *around* relation, it is marked with both the *txt* and the *img* prefix

|<img width="677" height="1097" alt="txt+img" src="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d"/>|
|:--:| 
| "It is also stylistically earlier to that work, being painted without pseudo-perspective, and having the *angels around the Virgin* [...]." |

Please note that neither *txt* nor *img* can be used alone. while *txt* only has the *img* prefix to pair with the *img* prefix has more.

### Inferences
There are cases where the information of the image is richer than the description. 
Figure below shows the same example as before but with the *inf* and *img* prefixes and the relation *touch*. That shows that the *touch* relation between the angel and the throne is inferred from the image.
The condition that needs to be met for such inferred relations is that both entities, in this case the angel and the throne, are present in the description.
Since both are present this inference has to be made. 
On the other hand, the Christ child is not annotated since he is not present in the text.
That also means that *only* relations can be inferred. 
  
|<img width="673" height="1096" alt="inf" src="https://github.com/user-attachments/assets/1623ea7c-ae59-4aae-ada1-939b0befe020" />|
|:--:| 
| "[...] having the *angels* around the Virgin simply placed one above the other, rather than being spatially arranged. The *throne* [...]." |

### No meta information
Annotations that have entities or relations present in the text but are not present within the image are not annotated within the text. The same text-image pair shown in figure below has no annotations with neither maesà nor with Cimabue or the Basilica of San Francesco di Assisi. Note the list of entities in the right part of the figure.
Also note that these are mostly relevant for the textual annotation rather than the image one.

|<img width="1993" height="1093" alt="no_assisi" src="https://github.com/user-attachments/assets/eb01e490-acda-496c-85fa-f58b2820b842" />|
|:--:|
|"[...]. The throne is similar to the *Maestà painted by Cimabue* in the Basilica of San Francesco di Assisi (1288–1292)."|


### No unseen relations
Just like the entities that are not present in the image, the relations that are not visible in the image are also not annotated. The figure below
shows that the goddess Venus *has arrived* at the shore. It does not however, show that Venus emerged from the sea. She is depicted on a clam at the shore. The described event has already taken place and therefore not present in the image. 
Remember: inferring this relation would mean the relation is inferred based on the description and not from the image. This is not allowed. 

|<img width="1271" height="801" alt="emerge" src="https://github.com/user-attachments/assets/ed0ae98d-5f0e-4626-8889-c5c1d3856c68" />|
|:--:|
|"it depicts the goddess Venus arriving at the shore after her birth, when *she had emerged from the sea* fully-grown [...]."|

### Synonyms
Often times the description uses synonyms to describe the same entity in different ways. This is marked with the prefix \textit{syn}.
 The figure with the dragon further down is an example. It shows saint George spearing a dragon. The description of the image also mentions a beast and refers to the dragon introducing a synonym.
The annotations are done by copying the box of the dragon and renaming it as beast. Finally the *syn* prefix with a simple *is* relation is drawn between them. Note that the boxes will end up exactly on top of each other. 

### Symbolize
Similarly, to the synonymy case, in the same example figure, the belt is described to symbolize a leash. 
Following the same approach the relation between the belt and leash (renamed belt copy) has the prefix *sym* with the relation *used as*.

### Implications
Furthermore, the phrase *story of Saint George and the dragon* in the same example figure below is in itself a entity that also implies the existence other entities. Those are *Saint George* together with *dragon*. This leads to three annotations instead of just one. The correct prefix for these cases is *impl* and since this applies to the entities rather than the relations it has be prepended on the entity meta string. 

|<img width="1273" height="972" alt="dragon" src="https://github.com/user-attachments/assets/947e31e3-5c81-44ea-a27e-f1517b0d84c0" />|
|:--:|
|"It shows a scene from the famous *story of Saint George and the dragon*. On the right George is spearing the *beast*, and on the left the princess is using her *belt as a leash* to take the dragon up to the town.[...]."|

### Uncertainty
In some cases, the description is not giving certain information about e.g. people present in the image. In those cases, we use the *maybe* prefix to express that uncertainty. 
if the image-text pair consists of only uncertain entities, said pair is skipped. The *maybe* prefix applies to both the entities and the relations.
The figure below shows an example of this. Note the highlighted entities on the right side of the image. The saint with the 8 refers to the old woman on the right. Again, this follows the same approach as in the synonym and symbolize cases. Therefore, the boxes are exactly on top of each other. In this case the relations are also directly on top of each other making it seem like there is only one other box for the old woman when there are in fact two.

|<img width="2121" height="1191" alt="maybe" src="https://github.com/user-attachments/assets/665e600a-3560-44a9-b261-479d713d15c5" />|
|:--:|
|"[...] *an old female saint (Anne or Elisabeth)* and an old male saint (Joachim or Joseph). On the left are *a female saint (possibly Mary Magdalene)* [...]."|

## genaral guidelines
### Spans
The spans in both the textual and image annotations need to be as accurate as possible. The textual annotations would be trivial however the box annotations within the images need to be as precise as possible. That means the entirety of the body needs to be in in the box. This includes halos as much as it includes clothings.  Few exceptions are made if body parts are partially obstructed by other objects and e.g. in group scenes hard to assign to the correct people.
The figure first image below shows a simple case to assign obstructed body parts whereas the second shows a hard one. Since this particular example shows a small crowd close together they are annotated in a group. More on that follows later.

| <img width="1407" height="1088" alt="span1" src="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6" />|
|:--:|
|"[...] *an old female saint (Anne or Elisabeth)* and an old male saint (Joachim or Joseph). On the left are *a female saint (possibly Mary Magdalene)* [...]."|

| <img width="1580" height="888" alt="span2" src="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f" />|
|:--:|
|"The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21."|

Text annotations are only made by annotating the entities. No relations are made for the textual annotations. However the linking is still done in the same way as for the image annotations.
The left part of the very first figure shows an example of it. Note that the annotation of the id at the beginning of each description is not required. Those ids are not part of the actual descriptions.

### Big bounding boxes
Big bounding boxes that are drawn all over the image are allowed if a entity is a scene or if a group of people need to be annotated.
One can see that in the below figure, in order to capture the three archangels within the painting, a box that spans over the entire image is needed.  The fact that the box is barely visible but still marked as such, as indicated one the right list of highlighted entities, shows that the box spans over the entire image.

| <img width="2127" height="1015" alt="big_box" src="https://github.com/user-attachments/assets/a606a077-728c-4fbd-af65-151e041823b9" />|
|:--:|
|"[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."|

### Individuals are part of a group
If there are groups with distinguishable individuals, like in the below figure, then they have to have the _part\_of_ relation to the group. Keep in mind that groups can have other relations as well.

|<img width="2281" height="1110" alt="part_of" src="https://github.com/user-attachments/assets/e0a3a60f-fdbf-4fbc-96e0-80dae6825822" />|
|:--:|
|"[...] the picture represents the three archangels: Michael on the left, Raphael in the centre, and Gabriel holding a lily, together with a young Tobias, son of Tobit."|

### Group annotations
Entities have to be annotated as a group if
-  They are not specifically named
-  The number of relevant entities start overlapping and reach 5 overlapped entities
-  multiple entities of the same type close together e.g. flowers

The figure below shows the blessed and the damned on the left and right side of the painting respectively. Since they both are a big group of people they exceed the maximum amount of individual entities and become a group.

| <img width="548" height="730" alt="when_group" src="https://github.com/user-attachments/assets/79c4901a-073d-4f67-b05f-6520d566ee5d" />|
|:--:|
|"[...] Rising up the left hand side of the painting (at Jesus' right hand) are the *blessed*, whilst the *damned* fall into hell on the right hand side [...]."|

### No spatial annotations
Spatial annotations are not annotated since they harbour little information and can be inferred by the location of the boxes. Additionally, relations such as _together with_ are treated as spatial information. An exception for that is discussed later. The below figure with the emphasis on the caption shows that those relations are left out.

| <img width="2127" height="1015" alt="big_box" src="https://github.com/user-attachments/assets/4983f5f8-89f8-4d1b-9686-738c91160f04" />|
|:--:|
|"[...] the picture represents the three archangels: Michael _on the left_ Raphael _in the centre_, and Gabriel holding a lily, together with a young Tobias, son of Tobit."|

### More specific relations
Similar to the *inf* prefix that infers relations, there are cases where the relations are described with very little detail i.e. words like *with* are used when for example *holds* would be more fitting. If the image contains these more detailed information then also include those with the *img* and *inf* prefixes. For that the entity annotation box has to be copied and marked their linking has to be marked with an underscore "\_".  
The figure below shows an example. Both babies have the *with* relation with the respective adult, but also at the same time the adults have the more detailed holds relation inferred. Pay close attention to the linking on the right. The entities with the inferred relation end with the underscore.

|  <img width="2037" height="1092" alt="with_or_hold" src="https://github.com/user-attachments/assets/9c311810-7c81-4213-a6a5-c82f18de6101" />|
|:--:|
|"It shows mainly Elisabeth *with* baby John the Baptist, Joseph and Mary *with* infant baby Jesus (l.t.r.).These figures of the New Testament maintain eye contact."|


### Wikidata linking
Every entity has to be linked as closely as possible to the correct Wikidata page. If it is a group annotation then the number of individual entities are given before the linking. The figure below shows how such a linking looks like for a group of more than 10 people. Since this group is unique the instance count denoted with the '\#' is 1. 

|<img width="2063" height="1087" alt="group_instance" src="https://github.com/user-attachments/assets/bbb5768d-e9ce-46ea-a3e6-0b0cef2bbb39" />|
|:--:|
|"[...] Rising up the left hand side of the painting (at Jesus' right hand) are the blessed, whilst the damned fall into hell on the right hand side.[...]."|


### instances
For every entity given in the text, there might be more than just one in the image. If it is clear that all of the present entities in the image are described, then annotations need to specifically count each instance of the entity. This ensures that the correctness and completeness.
In first figure below, the instance count for the selected angel is displayed as 2 since it is the second angel. There is no particular rule regarding the orders or where to start counting. However, the instances have to match those described in the text. 
The second figure highlights a second group of angels in the foreground. Those angels refer to the ones standing next to Jesus.
Taking this information into account, the instance counts in the linkings for the text needs to fit those in the painting. 
The expected linking for the flying angels would be "https://www.wikidata.org/wiki/Q235113\#1-2" and for the foreground angels it would be www.wikidata.org/wiki/Q235113\#3-6. Both would be for the corresponding *angels* term. 

|<img width="2017" height="1088" alt="instances1" src="https://github.com/user-attachments/assets/459e7040-88bc-4b48-a371-d284543e9e46" />|
|:--:|
|"It depicts Christ standing on a double basement, keeping the Cross. *Behind him is a damask cloth held by two angels* and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. In the foreground are four angels [...]."|

|<img width="1995" height="1091" alt="instances2" src="https://github.com/user-attachments/assets/ebc373fc-b989-4e15-80db-554919f1ed95" />|
|:--:|
|"It depicts Christ standing on a double basement, keeping the Cross.Behind him is a damask cloth held by two angels and, at the sides, a landscape inspired to the Venetian hills; the castle on the right is similar to that of Udine. *In the foreground are four angels* [...]."|

### Background objects
Background entities are of equal importance as foreground entities, however, background entities that hold little importance are not instantiated. The figure below shows how the mountains in the background are annotated and how the wikidata linking is done. The only difference is the missing instance. 

|<img width="1952" height="1072" alt="background1" src="https://github.com/user-attachments/assets/c2859c1f-2d7e-4e3d-8136-5d41491720ba" />|
|:--:|
|"[...] The landscape background is typical of Perugino, *with mountains and hills in deep perspective*. To the left of the cross stand saint Jerome (inspiration for the Jesuati) and Francis of Assisi.To its right are Mary Magdalene touching Christ's feet, Blessed Giovanni Colombini (founder of the Jesuati) and John the Baptist (patron saint of Florence).John points to Christ, whilst Jerome has thrown down his cardinal's cap at the foot of the cross, symbolising his rejection of earthly honours. [...]."|

### Relations
Not every text-image pair has valid relations but valid entities. As long as there is at least one entity given, the pair is not skipped. 
The first figure below shows an example with only one valid entity annotation
and no relations. While those pairs are not skip, the second figure shows a pair that has no valid entity due to the uncertainty expressed in the description.

|<img width="2106" height="1092" alt="skip" src="https://github.com/user-attachments/assets/5046dc1e-50b5-45f6-a752-0f3ef375f291" />|
|:--:|
|"A Goldsmith in His Shop, Possibly Saint Eligius is a 1449 painting by Petrus Christus, now in the Metropolitan Museum of Art. The main figure in the painting *was long thought to be Saint Eligius*, the patron saint of goldsmiths, due to the presence of a halo."|

|<img width="1038" height="1090" alt="no_skip" src="https://github.com/user-attachments/assets/91377c6c-1cae-405e-8ecf-f3f5c44f1dcd" />|
|:--:|
|"[...] *The Madonna* was portrayed standing, alone, often with a closed book on her belly, an allusion to the Incarnate Word. The works were associated with the devotions of pregnant women, praying for a safe delivery. Here the Virgin wears the Girdle of Thomas, a belt of knotted cloth cord that was a relic held in Prato Cathedral, which many depictions wear."|

### Only binary relations
Since every relation is defined to be between a subject and an object, they have to be binary. Any relations that have more entities such as *between* are not allowed. Furthermore, there will be no inferences made to substitute these relations.
The figure below shows, in the top panel, Christ with two cherubs. The relation would be *between* for both cherubs and Christ. Since it is impossible for a entity to be between just one other entity, this relation is left out.  

|<img width="1055" height="1100" alt="tertiär" src="https://github.com/user-attachments/assets/4e5d8cb8-bf7c-48f3-9102-35337c489a0e" />|
|:--:|
|"The work is in a huge gilded and carved frame, with three cusps covered placed on jutting corbels. The three arches are decorated with vegetable motifs; over them are three panels (whose upper frame is lost), containing the paintings, from the left, of the Angel of the Annunciation, the Blessing *Christ between Cherubims* and the Annunciation. [...]."|

### No meta information 
The goal is not to annotate every named entity that is in the text or image but to find and annotate those that are in the painting. That means that we do not annotate any entities if they are e.g. the name of the painting or the name of the painter. This also includes cases where the description makes comparisons to other works in the epoch. The text-image pair in the figure with the pregnant Madonna two figures above is an example for that. Note that this is mostly relevant for the textual annotations.

### Entities with further information
Some descriptions describe a entity at some point and then at a later point give more details. For example, the text may say a person wears some sort of clothes. Later it describes those clothes in more detail naming particular parts like hats.
In these cases all entities need to be annotated, the generic one and the more detailed entities. Furthermore those more detailed parts meed to be marked with the _part\_of_ relation
The figure below shows the person on left wearing a _vestment_. This _vestment_ is later described as _cope_ and _mitre_, leading to him also wearing a _cope_ and a _mitre_. Finally, _Mitre_ and _cope_ are also _part\_of_ the _vestment_.

|<img width="941" height="733" alt="cope" src="https://github.com/user-attachments/assets/81635172-89bd-473d-bad0-3c7e12e9059f" />|
|:--:|
|"[...] Saint Donatian, dressed in brightly coloured _vestments_, stands to the left. [...] The precision of the detail achieved is especially noticeable in the rendering of threads of St. Donatian's blue and golden embroidered _cope and mitre_, in the weave of the oriental carpet, and in the stubble and _veins on van der Paele's aging face_."|

### Not to detailed
Descriptions can describe the visual too detailed. Those entities and relations are not annotated. The same example shown in above figure describes the face of the kneeling person in too much detail describing the veins on his face. This relation is not annotated.

### Body parts
Body parts are not treated as their own entity and therefore can also not be part of a relation. Those body parts will be treated as the whole person. E.g. _child sits in her lap_ will be treated as child sits on mother.
The figure below shows the same example image as before with different annotations, focusing on Mary and the Christ child. While the descriptions describes Christ siting on her lap, the annotation is still done for Mary as a whole.

|<img width="942" height="732" alt="lap" src="https://github.com/user-attachments/assets/beab2356-23d1-470e-914e-e00e7eef2974" />|
|:--:|
|"[...] The Virgin Mary is enthroned at the centre of the semicircular space, which most likely represents a church interior, with the _Christ Child on her lap_.[...]."|

### Transitive relations
Sometimes descriptions  describe an entity doing something to another entity for the sake or goal of yet another entity. The figure below shows Mary presenting the Christ child to Rolin. To express this in the annotations, it is annotated that Mary presents Christ child and Chrits child is presented to Rolin.

|<img width="727" height="731" alt="present" src="https://github.com/user-attachments/assets/b5356a18-d8ca-4431-bf78-35e1614caad8" />|
|:--:|
|"The scene depicts the Virgin Mary crowned by a hovering Angel while *she presents the Infant Jesus to Rolin*. [...]."|

### Miscellaneous
#### Long tail entities
Some entities can be longer such as *Episodes of the lives of St. Benedict* or *Throne of Jesus and Madonna*. Those have to be annotated as one entity without extracting other entities like *St. Benedict*, *Jesus* or *Madonna*.

#### Actions or Events
As earlier described, Events that take place currently are annotated however those that must have already past, since those can not be seen, are not annotated. Also, similar to the point above, inferring that someone does something to someone else just because the event or action may hint to it is not allowed. For example, inferences from *Coronation of the Virgin*  to the entity *Jesus* and the relation *Jesus; crowns; the Virgin* are not allowed. However since the word *the Virgin* is within the event itself inferring the existence of her as a entity in the painting is allowed and annotated.


