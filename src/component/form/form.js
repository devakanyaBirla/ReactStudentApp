import { useRef } from "react";

export default function Form(props) {
    let { studentList, addNewRecord, addBranch } = props;

    let RollInputValue = useRef(null);
    let NameValue = useRef(null);
    let BranchValue = useRef(null);
    let mobileValue = useRef(null);



    return <>
        <div className="container bg-light ">
            <div className="row mt-5">
                <div className="col-md-6">
                    <label className='font-weight-bold'>Student Roll No.:</label>
                    <input type="text" ref={RollInputValue} placeholder="Student Roll Number" className="form-control" />
                </div>

                <div className="col-md-6">
                    <label className='font-weight-bold'>Student Name:</label>
                    <input type="text" ref={NameValue} placeholder="Student Name " className="form-control" />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className='font-weight-bold'>Branch Name:</label>
                        <select className="form-control" ref={BranchValue} >
                            <option selected>Select Branch</option>
                            <option value="IT">IT</option>
                            <option value="CS">CS</option>
                            <option value="match">match</option>
                            <option value="EC">EC</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="from-group">
                        <label className='font-weight-bold'>Mobile No.:</label>
                        <input type="text" ref={mobileValue} placeholder="Student Mobile Number" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <button onClick={() => addNewRecord(RollInputValue.current.value, NameValue.current.value, BranchValue.current.value, mobileValue.current.value)} className="btn btn-success">Add   Data</button>
                    </div>

                </div>
                <div className="col-md-6">

                    <button onClick={() => addBranch('IT')} className="btn  btn-info ml-2">IT: ({studentList.filter((student) => student.branch == "IT").length})</button>

                    <button onClick={() => addBranch("CS")} className="btn btn-success ml-3">CS:({studentList.filter((student) => student.branch == "CS").length})</button>

                    <button onClick={() => addBranch("EC")} className="btn btn-danger ml-3">EC:({studentList.filter((student) => student.branch == "EC").length})</button>

                    <button onClick={() => addBranch("match")} className="btn btn-warning ml-3">MATHS:({studentList.filter((student) => student.branch == "match").length})</button>

                    <button onClick={() => addBranch("all")} className="btn  btn-dark ml-3">TOTAL: ({studentList.length})</button>

                </div>
            </div>
        </div>


    </>
}