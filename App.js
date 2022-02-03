import React, { useState } from 'react';
import './App.css';

let id = 0;

function App() {
  const [item, setItem] = useState('');
  const [func, setFunc] = useState('onShowAllTask');
  const [itemsarr, setitemsarr] = useState([]);

  return (
    <div className="App">
      <div className="container">

        <center><h1>TODOMATIC APP</h1></center>

        <div className="d-flex justify-content-center mb-3">
          <input className="form-control mx-sm-3" type="textbox" name="item-name" placeholder="Enter item name here" value={item} onChange={(event) => { setItem(event.target.value) }} />
          <button className="btn btn-primary btn-sm" onClick={() => {
            // items.push({ workname: item, isComplited: false, id: ++id });
            let arr = itemsarr;
            arr.push({ workname: item, isComplited: false, id: ++id });
            setitemsarr(arr);
            setItem('');
          }}>Add Item</button>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary btn-sm" onClick={() => { setFunc('onShowAllTask'); }}> Show All Tasks</button>
          <button className="btn btn-primary btn-sm" onClick={() => { setFunc('onShowActiveTask'); }}> Show Active Tasks</button>
          <button className="btn btn-primary btn-sm" onClick={() => { setFunc('onShowCompletedTask'); }}> Show Completed Tasks</button>
        </div>

        <div className="to-do-section">
          {
            func === 'onShowAllTask' ? <div className="Tasks">
              {
                itemsarr.map((element) => {
                  return <div className="Task" key={element.id}>
                    <h1>{element.workname}</h1>
                    <label>Is Work Complited : </label>
                    <input type="checkbox" onChange={(event) => {
                      element.isComplited = event.target.checked;
                      let arr = itemsarr.filter((item) => item.id !== 0);
                      setitemsarr(arr);
                    }} checked={element.isComplited} />
                    < button onClick={() => {
                      let arr = itemsarr.filter((item) => item.id !== element.id);
                      setitemsarr(arr);
                    }}>Delete Task </button>
                  </div>
                })
              }
            </div> : func === 'onShowActiveTask' ? <div className="Tasks">
              {
                itemsarr.map((element) => {
                  if (element.isComplited === false) {
                    return <div className="Task" key={element.id}>
                      <h1>{element.workname}</h1>
                      <label>Is Work Complited : </label>
                      <input type="checkbox" onChange={(event) => {
                        element.isComplited = event.target.checked;
                        let arr = itemsarr.filter((item) => item.id !== 0);
                        setitemsarr(arr);
                      }} checked={element.isComplited} />

                      <button onClick={() => {
                        let arr = itemsarr.filter((item) => item.id !== element.id);
                        setitemsarr(arr);
                      }}>Delete Task </button>
                    </div>
                  }
                })
              }
            </div>
              : <div className="Tasks">
                {
                  itemsarr.map((element) => {
                    if (element.isComplited === true) {
                      return <div className="Task" key={element.id}>
                        <h1>{element.workname}</h1>
                        <label>Is Work Complited : </label>
                        <input type="checkbox" onChange={(event) => {
                          element.isComplited = event.target.checked;
                          let arr = itemsarr.filter((item) => item.id !== 0);
                          setitemsarr(arr);
                        }} checked={element.isComplited} />

                        <button onClick={() => {
                          let arr = itemsarr.filter((item) => item.id !== element.id);
                          setitemsarr(arr);
                        }}>Delete Task </button>
                      </div>
                    }
                  })
                }
              </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
