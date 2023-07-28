import React, { useState } from "react";
import "../Genres/Genres.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// const GenresMovie = ({ item }) => {
//   const [open, setOpen] = useState(false);
//   //   return (
//   //     <div className="dropdown">
//   //       <div className="head" style={{ display: "flex" }}>
//   //         <div className="dropdown-btn">
//   //           <div className="p">Genres</div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );

//   if (item.childrens) {
//     return (
//       <div className={open ? "sidebar-item open" : "sidebar-item"}>
//         <div className="sidebar-title">
//           <span>
//             {item.icon && <i className={item.icon}></i>}
//             {item.title}
//           </span>
//           <i
//             className="bi-chevron-down toggle-btn"
//             onClick={() => setOpen(!open)}
//           ></i>
//         </div>
//         <div className="sidebar-content">
//           {item.childrens.map((child, index) => (
//             <GenresMovie key={index} item={child} />
//           ))}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <a href={item.path || "#"} className="sidebar-item plain">
//         {item.icon && <i className={item.icon}></i>}
//         {item.title}
//       </a>
//     );
//   }
// };

export default function GenresMovie({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <div className="head" style={{ display: "flex" }}>
            <div className="dropdown-btn">
              <div className="p">Genres</div>
            </div>
          </div>
          <ArrowDownwardIcon onClick={() => setOpen(!open)} />
          {/* <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i> */}
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <GenresMovie key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>{item.gener}</div>;
  }
}

// export default GenresMovie;
