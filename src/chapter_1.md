# Annotation guidelines
## Task
### Entity extraction
Given a text-image pair, 
the goal of the annotation process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated. 
For the images, annotations are done through bounding boxes that span the entire entity, even if it includes other entities.
For  textual ones, the spans are limited to the exact phrase. More details are described in the following guidelines.

### Relation extraction
The followup task after the entities are annotated is to annotate the relations that two entites share between each oher. Those relation annotations are limited to the images. That means no relation annotation are made for the descriptions.


### Example
The following figure shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio. You can see that only the entities are marked for the textual descriptions. For that only the subject field is necessary. The Qid at the beginning is not important and is not annotated. At the right, the image annotation shows boxes for every named entity and the relations between them with prefixes. 
How to proceed in regular but also in special cases are described in more detail in the guidelines below.  
<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <a href="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a"><img alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/cd5bef89-acf9-4188-80f6-5f6a3d5f406a" class="zoom-img"></a>
      </figure>
      <figcaption>This figures shows both annotation types. The textual named entity annotation is on the left, while the scene graph annotations</figcaption>
    </td>
  </tr>
</table>

## Annotation tool setup
To access to the tool used for the annotations please follow this link: https://labelstudio.open-develop.org/ and log in with your log in credetials.

After you have successfully logged in, please select the _image annotation_ project and open it in a new tab by either presssing the right mouse wheel button or the right button and select the "open in a new tab" option. Afterwards open the other project _text annotation_ normally.
It is recommended to have both of them open at the same time side by side. Either use a second monitor or drag both tabs in the right and left corner of the monitor respectively.    
### Open image for annotation 
Opening the image in the file is done by simply pressing one of them. The list of the images is put in the left side and the image is opened in the center. Now you are ready to annotate the image following the guidlines below. 
### Open text annotation tool
To open the respective description of the image, the id of the image needs to be filtered in the text annotation tool. The id is found by pressing the "<>" button next to the image in the image annotation file. It is the last part of the of the ______ that starts with "Q" followed by some numbers and ends with ".jpg". Copy that name and paste it in the search bar of the textual annotation tool. Only one match is expected to show up. Selecting it opens the description to the image and you can start annotating the image according to the guidelines below.
### Open image-text pair
lorem ipsum

### Creating relations between entities
Relations are always directed, that means that every relation has a source and a target. To create a relation between the two, the highlighted button in the figure below has to be pressed and after that the target entity has to be selected. Afterwards, a unnamed arrow from the source entity to the target entity will show up in the image. To give the relation a name, you have to navigate to the "relation" tab in the bottom right. That tab lists all the relations and by pressing the "..." button that shows up after hovering over a relation. A list of relations is opened and selectable by a drop down menu. These relations however, are not fixed ones, they are a list of given relations. To add relations into the pool, you need to open the settings->label interface->code and input the relaion by first copying an already existing relation tag marked with e.g. "< Relation holds >" and paste it one row below it to make another one.  After saving and refreshing the annotation page, you can input the new relation.

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


#### Big bounding boxes
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


#### Group annotations
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


#### Body parts 
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


#### Background objects boxes
Background entities are of equal importance as foreground entities. The boxes are drawn in one complete box instead of multiple small ones. This needs to be followed even if major foreground scences would be part of the background bounding box.

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


### Annotations of the boxes
Once a box is drawn over a entity, multiple textboxes appear beneath the image. If they are not visible at first you have to scroll down. The following information have to be added. 
#### Adding a name
All the boxes are simply called _box_, so in order to give them the proper name, a label has tp be added. That label s the name of the box and describes the object that is annotated. The very first textbox is responsible for that annotation. This annotation is manadtory and saving is impossible until a name has been added. The system tells you which field in which box misses annotations.
Only ever use one single name per box and feel free to just use the name that is used in the description. 

The figure below shows Mary with infant Jesus and the annotation box is drawn over her. At the right, the name of the box can be seen as "Virgin" which is a usual alias for her. --> anderes Beispiel! 

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


#### Adding a Wikidata link
Every entity has to be linked as closely as possible to the correct Wikidata page. 
--> anderes Beispiel
The figure below shows how such a linking looks like for a simple example. It is given in the text-field just below the name and also mandatory. 

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

#### Adding instance counters
For every entity given in the text, there might be more than just one in the image. If it is clear that all of the present entities in the image are described, then annotations need to specifically count each instance of the entity. This ensures that the correctness and completeness.
They are given as simple numbers in the _instance_ field. This field is not mandatory, since some entities are not instatiated [as described here](#background-objects-further-annotations).
Using the same example from [instances within text](#instances-within-text) 
In the first figure below, the instance count for the selected angel is displayed as 2 since it is the second angel. There is no particular rule regarding the orders or where to start counting. However, the instances have to match those described in the text. 
The second figure highlights a second group of angels in the foreground. Those angels refer to the ones standing next to Jesus.

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


#### Adding group size number
The figure below shows how the group size is given for the group of "blessed", which in this image are more than 10 people. 
--> Beschreibung am Bild anpassen The n denotion  is only used in groups and since this group is unique the instance count denoted with the '\#' is 1. More on instances is in the next point.  
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

#### Synonyms
Often times the description uses synonyms to describe the same entity in different ways. Such synonyms are annotated by writting  them in the _synonym_ text field. The synonyms have to be separated by commas. Note, only the written synonyms are desired not once that people know about. That means that if Jesus is shown and descibed as jesus only, there are no synonyms. Since this does not happen everytime, this field is also not mandatory for every entity
 The figure with the dragon [further down](#implications) is an example. It shows saint George spearing a dragon. The description of the image also mentions a beast and refers to the dragon introducing a synonym.

#### Symbolize
Similarly, to the synonymy case, in the [same example](#implications) figure, the belt is described to symbolize a leash. The annotation in such cases is done by filling them in the last textbox. This field is not mandatory as it does not always occur.

#### Implications
as already described, some entities are events or actions. The figure below contains the phrase *story of Saint George and the dragon*, which in itself is treated as a entity. However, it also implies the existence other  of other entities. Those are *Saint George* together with *dragon*. This leads to three annotations instead of just one. However, it is not an implication if the said entities appear in the description specifically and outside from meta information.
To annotate this correctly there is a button that needs to be pressed if and only if such a implication is made. The vast majority will not be implications therefore, most of the times the button is not pressed.

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


#### Uncertainty in entities
In some cases, the description is not giving certain information about e.g. people present in the image. In those cases, we use the _uncertain?_ button at the end. 
Similarly to uncertainity abuot a entity there could be uncertainty about relations. That is described in [Uncertainty in relations](#uncertainty-in-relations) 
if the image-text pair consists of only uncertain entities, said pair is skipped. 
--> anderes Beispiel
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



#### Background objects further annotations
Background objects are not instantiated. The figure in the previous [background](#background-objects-boxes) chapter shows how the mountains in the background are annotated and how the in the previuous chapters made annotations are done. The only difference to the regular cases are the missing instance counters. 



#### At least one entity
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



### Relations
As mentioned in the beginning, the second task is to mark the relations between two entities, *only* in the image. The relations that are marked do not necessarily have to be present in the description. However the corresponding entities have to. Again, The first image's right side shows an example.
The steps to follow are described below. 


#### Textual and image annotations
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


#### Inferences
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


#### No unseen relations
Just like the entities that are not present in the image, the relations that are not visible in the image are also not annotated. The figure in [the first example](#textual-and-image-annotations)
shows that the goddess Venus *has arrived* at the shore. It does not, however, show that Venus emerged from the sea. She is depicted on a clam at the shore. The described event has already taken place and is therefore not present in the image. 
Inferring this relation would mean the relation is inferred based on the description and not from the image. Infereations are only allowed based on the images.


#### Entities with further information
Some descriptions describe a entity at some point and then at a later point give more details. For example, the text may say a person wears some sort of clothes. Later it describes those clothes in more detail naming particular parts like hats. Those entities would be annotated follwoing the [entity](#annotating-the-image) guidlines.
Furthermore, those more detailed parts need to be marked with the _part\_of_ relation
The figure below shows the person on the left wearing a _vestment_. This _vestment_ is later described as _cope_ and _mitre_, leading to him also wearing a _cope_ and a _mitre_. Finally, _Mitre_ and _cope_ are also _part\_of_ the _vestment_. 

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

#### Not to detailed
Descriptions can describe the visuals too detailed. Neither the relations nor entities are annotated. The same example shown in above figure describes the face of the kneeling person in too much detail describing the veins on his face. This relation is not annotated.


#### Individuals are _part\_of_ a group
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

#### More specific relations
Similar to the *img_inf* prefix that infers relations, there are cases where the relations are described with very little detail i.e. words like *with* are used when for example *holds* would be more fitting. If the image contains such more detailed information then also include those with the *img_inf* prefixes. 

--> hier am besten eine bessere Lösung finden
For that the entity annotation box has to be copied and marked their linking has to be marked with an underscore "\_".  
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


#### Transitive relations 
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


#### Only binary relations
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


#### No spatial relations
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


## Miscellaneous 

### Long tail entities
Some entities can be longer such as *Episodes of the lives of St. Benedict* or *Throne of Jesus and Madonna*. Those have to be annotated as one entity without extracting other entities like *St. Benedict*, *Jesus* or *Madonna*.

### Actions or Events
As earlier described, Events that take place currently are annotated however those that must have already past, since those can not be seen, are not annotated. Also, similar to the point above, inferring that someone does something to someone else just because the event or action may hint to it is not allowed. For example, inferences from *Coronation of the Virgin*  to the entity *Jesus* and the relation *Jesus; crowns; the Virgin* are not allowed. However since the word *the Virgin* is within the event itself inferring the existence of her as a entity in the painting is allowed and annotated.


### Addition to inferred relations
If relations are inferred, it may be possible and logical to infer the respective most applicable relation for both of entities. For example the  figure in [More specific relations](#more-specific-relations) shows that for the left child, it could be possible for it to sit on his mother, while it could also be possible for the mother to hold the child. Therefore all possibilities have to be inferred. However, only the active forms. That means, that  child;  held_by; mother is not inferred.




