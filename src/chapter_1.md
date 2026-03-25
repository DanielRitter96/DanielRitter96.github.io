# Annotation guidelines
## Task
### Entities
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated.
For the images, annotations are done through bounding boxes that span the entire entity, even if it includes other entities. 

### Relations
The followup task after the entities are annotated is to annotate the relations that two entites share between each oher. Those relation annotations are limited to the images. That means no relation annotation are made for the descriptions.









## Relations
As mentioned in the beginning, the second task is to mark the relations between two entities, *only* in the image. The relations that are marked do not necessarily have to be present in the description. However the corresponding entities have to. Again, The first image's right side shows an example with the tool label-studio.
The steps to follow are described below. 

### Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there are the two prefixes  *txt* and *img*. If the relation is present both in the description and image then there is no need to use both of them, since by using none of them it is implied that it is present in both rather than in none of them. 
For example in the figure below with and excerpt of its description in the caption shows the triplet: "Angels *around* the Virgin". --> **vllt ein anderes Beispiel**

<table>
  <tr>
    <td>
    <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d"><img alt="txt+img" src="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d" class="zoom-img"></a>
        </figure>
      <figcaption>"It is also stylistically earlier to that work, being painted without pseudo-perspective, and having the <i>angels around the Virgin</i>[...]."</figcaption>
    </td>
  </tr>
</table>

Please note that neither *txt* nor *img* can be used alone. Both would need other prefixes. 

### Inferences
There are cases where the information of the image is richer than the description. 
The figure below shows the same example as before but with the *inf* and *img* prefixes and the relation *touch*. That shows that the *touch* relation between the angel and the throne is inferred from the image.
The condition that needs to be met for such inferred relations is that both entities, in this case the angel and the throne, are present in the description.
Since both are present this inference has to be made. 
On the other hand, the Christ child is not annotated since he is not present in the text.
That also means once again that *only* relations can be inferred. 
  
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/1623ea7c-ae59-4aae-ada1-939b0befe020"><img alt="inf" src="https://github.com/user-attachments/assets/1623ea7c-ae59-4aae-ada1-939b0befe020" class="zoom-img"></a>
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
        <a href="https://github.com/user-attachments/assets/9c311810-7c81-4213-a6a5-c82f18de6101"><img alt="with_or_hold" src="https://github.com/user-attachments/assets/9c311810-7c81-4213-a6a5-c82f18de6101"  class="zoom-img"></a>
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
        <a href="https://github.com/user-attachments/assets/b5356a18-d8ca-4431-bf78-35e1614caad8"><img alt="present" src="https://github.com/user-attachments/assets/b5356a18-d8ca-4431-bf78-35e1614caad8" class="zoom-img"></a>
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


### No unseen relations
Just like the entities that are not present in the image, the relations that are not visible in the image are also not annotated. The figure below
shows that the goddess Venus *has arrived* at the shore. It does not, however, show that Venus emerged from the sea. She is depicted on a clam at the shore. The described event has already taken place and is therefore not present in the image. 
Remember: inferring this relation would mean the relation is inferred based on the description and not from the image. Infereations are only allowed based on the images.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/ed0ae98d-5f0e-4626-8889-c5c1d3856c68"><img alt="emerge" src="https://github.com/user-attachments/assets/ed0ae98d-5f0e-4626-8889-c5c1d3856c68"  class="zoom-img"></a>
      </figure>
      <figcaption> "it depicts the goddess Venus arriving at the shore after her birth, when <i>she had emerged from the sea</i> fully-grown [...]."</figcaption>
    </td>
  </tr>
</table>


### Miscellaneous {#Miscellaneous}

#### Long tail entities
Some entities can be longer such as *Episodes of the lives of St. Benedict* or *Throne of Jesus and Madonna*. Those have to be annotated as one entity without extracting other entities like *St. Benedict*, *Jesus* or *Madonna*.

#### Actions or Events
As earlier described, Events that take place currently are annotated however those that must have already past, since those can not be seen, are not annotated. Also, similar to the point above, inferring that someone does something to someone else just because the event or action may hint to it is not allowed. For example, inferences from *Coronation of the Virgin*  to the entity *Jesus* and the relation *Jesus; crowns; the Virgin* are not allowed. However since the word *the Virgin* is within the event itself inferring the existence of her as a entity in the painting is allowed and annotated.



