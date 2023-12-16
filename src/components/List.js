import React from "react";

function List({ data, handleEdit, handleDelete }) {
  const Listdata = () => {
    return (
      <ul>
        {data.sort((a, b) => a.id - b.id).map((value, index) => {
          return (
            <li key={index}>
              {value.id} - Nama: {value.name} - {value.age} tahun{" "}
              <button type="button" onClick={() => handleEdit(value.id)}>
                Edit
              </button>
              |
              <button type="button" onClick={() => handleDelete(value.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return <>{data.length > 0 ? <Listdata /> : "Data kosong"}</>;
}

export default List;
