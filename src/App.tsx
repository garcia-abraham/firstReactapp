import React, { useState , useRef  } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  suma: number;
  done: boolean;
}

function App(): JSX.Element {

  const [newSum, setNewSum] = useState<number>(0);

  const [list, setLists] = useState<ITask[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);



  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    const j: number[] = list.map((t: ITask, i: number) => (t.suma))
    setNewSum(j[0]);
    taskInput.current?.focus();

  }

  const toggleDoneTask = (i: number): void => {
    const newSums: ITask[] = [...list];
    newSums[i].done = !newSums[i].done;
    setLists(newSums);
  }

  const removeSum = (i: number): void => {
    const newSums: ITask[] = [...list];
    newSums.splice(i,1);
    setLists(newSums)
  }
  

  const add = function()  {
    const suma = newSum + 5
    setNewSum(suma)
    const newSums: ITask[] = [...list, { suma, done: false }]
    setLists(newSums)

  }

  const sbr = function()  {
    const suma = newSum - 5
    setNewSum(suma)
    const newSums: ITask[] = [...list, { suma, done: false }]
    setLists(newSums)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input type="number" onChange={e => setNewSum(e.target.valueAsNumber)} value={newSum} id="numero" className="form-control" ref={taskInput} autoFocus />
                <button className="btn btn-success btn-block mt-2"  onClick={()=>add()}>
                  Sumar 5
                </button>
                <button className="btn btn-danger btn-block mt-2" onClick={()=>sbr()}>
                  Restar 5
                </button>
              </form>
            </div>
          </div>
          {
            list.map((t: ITask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.suma}</h2>
                <button className="btn btn-primary" onClick={() => toggleDoneTask(i)}>
                  {t.done ? '✔️' : '✕'}
                </button>
                <button className="btn btn-danger" onClick={() => removeSum(i)}>
                  🗑
                </button>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default App;
