There are cases in which the information richness of the description and the image vary. Some descriptions describe more details than what can be observed within the image through meta-information. However, with those being the only exception, the image holds more information than the description. To address this, we differentiate whether the relation is from the text or the image. Additionally, there are numeroues cases in which the later discussed conditions are met to *infer* relations from the image or text alone. In other rare cases, descriptions cannot with fully certainty determine the enitities names or roles, leading to uncertain guesses. Furthermore, Descriptions are often written in a way to make the text sound better, e.g., synonyms are used to describe the same entity in different ways. Similary to that, entities are often described to symbolize different entities. Finally, there are entities that describe an event or action rather than a person or object. Those can have additional entities within but are otherwise missing in the description. To deal with these different scenarios, we use prefixes in order to make it obvious which scenario a relation or enitity falls under.     

The used prefixes are:
- txt - marked for every relation that is present in the description
- img - marked for every relation that is present in the image
- inf - marked for every relation that is inferred from the image
- impl - marked for every entity that is implied from event entities
- syn - marked for every relation that declares that two entities are synonyms
- sym - marked for every relation that declares that one entity symbolizes the other
- uct - marked for every relation that is shows uncertainty about the relation between two entities
