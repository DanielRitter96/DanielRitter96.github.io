## genaral guidelines
### Spans
The spans in both the textual and image annotations need to be as accurate as possible. The textual annotations would be trivial however the box annotations within the images need to be as precise as possible. That means the entirety of the body needs to be in in the box. This includes halos as much as it includes clothings.  Few exceptions are made if body parts are partially obstructed by other objects and e.g. in group scenes hard to assign to the correct people.
The figure first image below shows a simple case to assign obstructed body parts whereas the second shows a hard one. Since this particular example shows a small crowd close together they are annotated in a group. More on that follows later.

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <img width="1407" height="1088" alt="span1" src="https://github.com/user-attachments/assets/31243304-3c30-4006-9de6-89f0e617cea6"  class="zoom-img">
      </figure>
      <figcaption> "[...] <i>an old female saint (Anne or Elisabeth)</i> and an old male saint (Joachim or Joseph). On the left are <i>a female saint (possibly Mary Magdalene)</i> [...]."</figcaption>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <figure class="zoom-container">
        <img width="1580" height="888" alt="span2" src="https://github.com/user-attachments/assets/ecb6ca93-d79d-4928-928e-55d0ced9538f"  class="zoom-img">
      </figure>
      <figcaption> "The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21."</figcaption>
    </td>
  </tr>
</table>

Text annotations are only made by annotating the entities. No relations are made for the textual annotations. However the linking is still done in the same way as for the image annotations.
The left part of the very first figure shows an example of it. Note that the annotation of the id at the beginning of each description is not required. Those ids are not part of the actual descriptions.