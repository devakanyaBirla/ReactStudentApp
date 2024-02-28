import  { useRef, useState } from "react";
import Table from "./component/Table/table";
import Form from "./component/form/form";
import Header from "./component/Header/header";
import data from './data';
import './App.css';

function App() {
  const [studentList, setStudent] = useState(data);
  const [defaultBranch, updateBranch] = useState('all');

  let RollInputValue = useRef(null);

  console.log(RollInputValue);

  const addBranch = (branch) => {
    updateBranch(branch);
  }

  const addNewRecord = (roll, Sname, branch, mobile) => {
    const newdata = { roll, Sname, branch, mobile };
    setStudent([...studentList, newdata]);
  }

  const deleteRecord = (roll) => {
    if (window.confirm("Are you sure?")) {
      let index = studentList.findIndex((student) => student.roll === roll);
      const updatedList = [...studentList];
      updatedList.splice(index, 1);
      setStudent(updatedList);
    }
  };

  return (
    <>
      <Header />
      <Form studentList={studentList} addNewRecord={addNewRecord} addBranch={addBranch} />
      <Table studentList={studentList} defaultBranch={defaultBranch} deleteRecord={deleteRecord} />
    </>
  );
}

export default App;

