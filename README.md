# Annotation guidelines
## Task
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated. The rules that need to be followed in order to achieve the maximum information richness and maintain consistency are listed below. The figure below shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio.

|<img width="2323" height="1207" alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/071a21c4-4bc3-4d0b-b97a-93725c499586" />|
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

|<img width="677" height="1097" alt="txt+img" src="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d" />|
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
The figure \ref{fig:withorhold} shows an example. Both babies have the \textit{with} relation with the respective adult, but also at the same time the adults have the more detailed holds relation inferred. Pay close attention to the linking on the right. The entities with the inferred relation end with the underscore.




