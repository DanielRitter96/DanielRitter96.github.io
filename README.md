# Annotation guidelines
## Task
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated. The rules that need to be followed in order to achieve the maximum information richness and maintain consistency are listed below. The figure below shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio.

|<img width="2323" height="1207" alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/071a21c4-4bc3-4d0b-b97a-93725c499586" />|
|:--:| 
| This figures shows both annotation types. The textual named entity annotation is on the left, while the scene graph annotations |

## Prefixes
# Prefix
The prefixes that are used are
- txt - marked for every relation that is present in the description
- img - marked for every relation that is present in the image
- inf - marked for every relation that is inferred from the image
- impl - marked for every entity that is implied from event entities
- syn - marked for every relation that declares that two entities are synonyms
- sym - marked for every relation that declares that one entity symbolizes the other
- maybe - marked for every relation that is shows uncertainty about the relation between two entities

# Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there are the two prefixes  *txt* and *img*. For every annotated relation, taken directly from the text itself (e.g. "Angels *around* the Virgin"),
we also mark whether the information is within the text (*txt* *around*), the image (*img* *around*) or present in both modalities (*txt* *img* *around*). 
The figure below shows an example image with an 
excerpt of its description in the caption. Since both modalities contain the information about the *around* relation, it is marked with both the *txt* and the *img* prefix

|<img width="677" height="1097" alt="txt+img" src="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d" />|
|:--:| 
| "It is also stylistically earlier to that work, being painted without pseudo-perspective, and having the *angels around the Virgin* [...]." |

Please note that neither *txt* nor *img* can be used alone. while *txt* only has the *img* prefix to pair with the *img* prefix has more.

# Inferences
There are cases where the information of the image is richer than the description. 
Figure below shows the same example as before but with the *inf* and *img* prefixes and the relation *touch*. That shows that the *touch* relation between the angel and the throne is inferred from the image.
The condition that needs to be met for such inferred relations is that both entities, in this case the angel and the throne, are present in the description.
Since both are present this inference has to be made. 
On the other hand, the Christ child is not annotated since he is not present in the text.
That also means that *only* relations can be inferred. 
  
|<img width="673" height="1096" alt="inf" src="https://github.com/user-attachments/assets/1623ea7c-ae59-4aae-ada1-939b0befe020" />|
|:--:| 
| "[...] having the *angels* around the Virgin simply placed one above the other, rather than being spatially arranged. The *throne* [...]." |





