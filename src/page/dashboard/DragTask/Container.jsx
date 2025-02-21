// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy
// } from "@dnd-kit/sortable";

// import SortableItem from "./sortable_item";

// const containerStyle = {
//   background: "#dadada",
//   padding: 10,
//   margin: 10,
//   flex: 1
// };

// export default function Container(props) {
//   const { id, items } = props;

//   const { setNodeRef } = useDroppable({
//     id
//   });

//   return (
//     <SortableContext
//       id={id}
//       items={items}
//       strategy={verticalListSortingStrategy}
//     >
//       <div ref={setNodeRef} style={containerStyle}>
//         {items.map((id) => (
//           <SortableItem key={id} id={id} />
//         ))}
//       </div>
//     </SortableContext>
//   );
// }


import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./Sortable_Item"; // Ensure correct import name

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1
};

export default function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((itemId) => (
          <SortableItem key={itemId} id={itemId} />
        ))}
      </div>
    </SortableContext>
  );
}
