# Annotation guidelines
## Task
Given a Text image pair, 
the goal of the annotations process is to annotate a scene graph based both on the text and the image. That means we annotate all the named entities within the text description. These include specific people such as Jesus Christ, John the Baptist or Zeus but also animals of any kind. Objects such tools, weapons  or buildings  are also annotated. The rules that need to be followed in order to achieve the maximum information richness and maintain consistency are listed below. The figure below shows both annotation modalities: the textual and the image one. The tool that is used for the annotations is called label studio.

<img width="2323" height="1207" alt="Screenshot 2026-03-18 102952" src="https://github.com/user-attachments/assets/071a21c4-4bc3-4d0b-b97a-93725c499586" />

## Prefixes
# Prefix
The prefixes that are used are
     - marked for every relation that is present in the description
     - marked for every relation that is present in the image
     - marked for every relation that is inferred from the image
     - marked for every entity that is implied from event entities
     - marked for every relation that declares that two entities are synonyms
     - marked for every relation that declares that one entity symbolizes the other
     - marked for every relation that is shows uncertainty about the relation between two entities
