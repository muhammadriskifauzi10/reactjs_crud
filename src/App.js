import { useState } from "react";
import { Data } from "./Data";
import List from "./components/List";
function App() {
  const [data, setData] = useState(Data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [update, setUpdate] = useState({
    id: null,
    bool: false,
  });

  const handleEdit = (id) => {
    const dataEdit = data.find((value) => value.id === id);

    setUpdate({
      id: id,
      bool: true,
    });

    setName(dataEdit.name);
    setAge(dataEdit.age);
  };

  const handleDelete = (id) => {
    const deleteData = data.filter((value) => value.id !== id);
    setData(deleteData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (update.bool) {
      const filterData = data.filter((value) => value.id !== update.id);
      const formData = {
        id: update.id,
        name: name,
        age: age,
      };
      setData([...filterData, formData]);
      setUpdate({ id: null, bool: false });
      setName("");
      setAge("");
    } else {
      let newId;
      if (data.length > 0) {
        newId = data[data.length - 1].id;
      } else {
        newId = 0;
      }
      const formData = {
        id: newId + 1,
        name: name,
        age: age,
      };
      setData([...data, formData]);
      setName("");
      setAge("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="nama"
          placeholder="Nama anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="usia"
          placeholder="Usia anda"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Tambah</button>
      </form>

      <h1>CRUD!</h1>

      <List data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default App;
