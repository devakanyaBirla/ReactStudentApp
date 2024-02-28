export default function Table(props){
    let {studentList,defaultBranch,deleteRecord} = props;
   return<>
    
    <div className="container mt-5 table-bordered table-dark">
         <table className="table  table-bordered table-warning">
         <thead className="border border-dark text-dark table-primary text-center">
               <tr>
                 <th >S.no</th>
                 <th>Roll number</th>
                 <th>Name</th>
                 <th>Branch</th>
                 <th>Mobile</th>
                 <th>Delete</th>
               </tr>
         </thead>
         <tbody className="text-center" >{studentList.filter((student)=>student.branch==defaultBranch || defaultBranch=="all").map((student,index)=><tr key={index}>
           <td>{index+1}</td>
           <td>{student.roll}</td>
           <td>{student.name}</td>
           <td>{student.branch}</td>
           <td>{student.mobile}</td>
         
           <td><button onClick={()=>deleteRecord(student.roll)} className="btn btn-outline-danger">Delete</button></td> 
 
       </tr>)}
       </tbody>
       </table>
       </div>
 
    </>
 }