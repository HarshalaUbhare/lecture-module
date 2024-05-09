import React from 'react';
const Instructor=()=>{
const cdate=()=>{

}
const cname=()=>{
  
}
    return (
        <>

<div className="container text-center my-4" style={{border:'1px solid black',backgroundColor:'rgb(161, 208, 249)'}}>
 <h1>Assigned Lecture Details</h1>
  <div className="row" style={{border:'1px solid black', padding:'10px'}}>
    <div className=" col-8">Course `${cname}`</div>
    <div className="col-4">Date- `${cdate}`</div>
  </div>
  <div className="row" style={{border:'1px solid black', padding:'10px'}}>
    <div className=" col-8">Course `${cname}`</div>
    <div className="col-4">Date- `${cdate}`</div>
  </div>

</div>

          
        </>
     )
  }


export default Instructor