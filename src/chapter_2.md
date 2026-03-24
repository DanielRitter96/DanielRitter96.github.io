# Prefixes
There are cases in which the information richness of the description and the image vary. Some descriptions describe more details than what can be observed within the image through meta-information. However, with those being the only exception, the image holds more information than the description. To address this, we differentiate whether the relation is from the text or the image. Additionally, there are numeroues cases in which the later discussed conditions are met to *infer* relations from the image or text alone. In other rare cases, descriptions cannot with fully certainty determine the enitities names or roles, leading to uncertain guesses. Furthermore, Descriptions are often written in a way to make the text sound better, e.g., synonyms are used to describe the same entity in different ways. Similary to that, entities are often described to symbolize different entities. Finally, there are entities that describe an event or action rather than a person or object. Those can have additional entities within but are otherwise missing in the description. To deal with these different scenarios, we use prefixes in order to make it obvious which scenario a relation or enitity falls under.     

The used prefixes are:
- txt - marked for every relation that is present in the description
- img - marked for every relation that is present in the image
- inf - marked for every relation that is inferred from the image
- impl - marked for every entity that is implied from event entities
- syn - marked for every relation that declares that two entities are synonyms
- sym - marked for every relation that declares that one entity symbolizes the other
- uct - marked for every relation that is shows uncertainty about the relation between two entities


# Textual and image annotations
Since the information richness between text and image are not always the same i.e. the image may show more than the description describes or vice versa. To deal with this disparity there are the two prefixes  *txt* and *img*. For every annotated relation, taken directly from the text itself (e.g. "Angels *around* the Virgin"),
we also mark whether the information is within the text (*txt* *around*), the image (*img* *around*) or present in both modalities (*txt* *img* *around*). 
The figure below shows an example image with an 
excerpt of its description in the caption. Since both modalities contain the information about the *around* relation, it is marked with both the *txt* and the *img* prefix

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <img width="677" height="1097" alt="txt+img" src="https://github.com/user-attachments/assets/934cf0e4-ce13-427f-b789-6a3c5659b20d" class="zoom-img">
      </figure>
      <figcaption>"It is also stylistically earlier to that work, being painted without pseudo-perspective, and having the <i>angels around the Virgin</i>[...]."</figcaption>
    </td>
  </tr>
</table>

Please note that neither *txt* nor *img* can be used alone. while *txt* only has the *img* prefix to pair with the *img* prefix has more.