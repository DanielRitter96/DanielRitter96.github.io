Some descriptions describe a entity at some point and then at a later point give more details. For example, the text may say a person wears some sort of clothes. Later it describes those clothes in more detail naming particular parts like hats.
In these cases all entities need to be annotated, the generic one and the more detailed entities. Furthermore those more detailed parts meed to be marked with the _part\_of_ relation
The figure below shows the person on left wearing a _vestment_. This _vestment_ is later described as _cope_ and _mitre_, leading to him also wearing a _cope_ and a _mitre_. Finally, _Mitre_ and _cope_ are also _part\_of_ the _vestment_.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <img width="941" height="733" alt="cope" src="https://github.com/user-attachments/assets/81635172-89bd-473d-bad0-3c7e12e9059f"  class="zoom-img">
      </figure>
      <figcaption>"[...] Saint Donatian, dressed in brightly coloured <i>vestments</i>, stands to the left. [...] The precision of the detail achieved is especially noticeable in the rendering of threads of St. Donatian's blue and golden embroidered <i>cope and mitre</i>, in the weave of the oriental carpet, and in the stubble and <i>veins on van der Paele's aging face</i>."</figcaption>
    </td>
  </tr>
</table>

### Not to detailed
Descriptions can describe the visual too detailed. Those entities and relations are not annotated. The same example shown in above figure describes the face of the kneeling person in too much detail describing the veins on his face. This relation is not annotated.