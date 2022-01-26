import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { queryAllByAltText } from "@testing-library/react";


interface IState {
  QA: any;
}

export default class EditQA extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { QA:[] };
  }
  // public componentDidMount(): void {
    public editQA(id: any, question: any, answer: any) {
    axios.get(`${`http://localhost:9000/app/getQA`}?id=${id}`).then(function(data){
      console.log({ QA: data.data });
      return data.data
    });
  }
  public updateQA(id: any, question:any, answer: any) {
    axios.put(`${`http://localhost:9000/app/updateQA`}?id=${id}`, {question, answer}).then(function (data) {
      // handle success
      console.log({ QA: data.data });
      return data.data;
    })
    
  }




  public render() {
    const QA = this.state.QA;
    return (
      // <div>
      //   {QA.length === 0 && (
      //     <div className="text-center">
      //       <h2>No data found at the moment</h2>
      //     </div>
//         )}
//         <div className="container">
//           <div className="row">
//             <table className="table table-bordered">
//               <thead className="thead-light">
                // <tr>
                //   <th scope="col">Chatbot Question</th>
                //   <th scope="col">Chatbot Answer</th>
                // </tr>
//               </thead>
//               <tbody>
//                 {QA &&
//                   QA.map((QA) => (
//                     //  key={QA.id}
//                       <input
//                       value={QA.question}/>
//                       <input
//                       value={QA.answer}/>

//                       // <td>
//                       //   <div className="d-flex justify-content-between align-items-center">
//                       //     <div
//                       //       className="btn-group"
//                       //       style={{ marginBottom: "20px" }}
                          
//                             </table>
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                                //@ts-ignore
//                               onClick={this.editQA}>
//                               Edit QA
//                             </button>
//                           </div>
//                         </div>
                      
                    
//                   ))}
//               </tbody>
//             {/* </table> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

      //   {QA.length === 0 && (
      //     <div className="text-center">
      //       <h2>No data found at the moment</h2>
      //     </div>
      // )}

<div className="container">
      {/* <form onSubmit={submitForm}> */}
        <label className="label">Edit Chatbot Question</label>
        <br />
        {/* {QA &&
                  QA.map((QA) => (
                   question={QA.id}
                  
                  //@ts-ignore
                  )}   */}
        <input
          value={QA.question}
          // onChange={(e) => setId(e.target.value)}
          type="text"
          // placeholder="Please enter user's ID"
          className="input"
        />
        
        <br />
        <label className="label">Edit Chatbot Answer</label>
        <br />
        <input
          value={QA.answer}
          // onChange={(e) => setPublic_key(e.target.value)}
        
          
          type="text"
          
          className="input"
        />
        
        <br />
        <button type="submit" className="btn1"
         
                               //@ts-ignore
                              onClick={this.editQA}>
          Submit
        </button>
                  
      </div>
    )
                  
  }
  }
