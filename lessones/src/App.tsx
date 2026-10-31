import { useState } from "react";

interface TaskData {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  task: TaskData;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

function Task({ task, onToggle, onDelete, onEdit }: TaskProps) {
  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)}/>
      <input value={task.text} onChange={(e) => onEdit(task.id, e.target.value)}/>
      <button onClick={() => onDelete(task.id)}>Usuń</button>
    </li>
  );
}

const init_Tasks: TaskData[] = [
  { id: 1, text: "aaaaaaa", done: false },
  { id: 2, text: "mimiimi", done: false },
];

let nextId = 3;

function App() {
  const [tasks, setTasks] = useState<TaskData[]>(init_Tasks);
  const [text, setText] = useState("");

  const completedTasks = tasks.filter(task => task.done).length;

  function addTask() {
    if (!text.trim()) return;

    const newTask: TaskData = {
      id: nextId++,
      text: text.trim(),
      done: false,
    };

    setTasks(previous => [...previous, newTask]);
    setText("");
  }

  function toggleTask(id: number) {
    setTasks(previous =>
      previous.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function editTask(id: number, newText: string) {
    setTasks(previous =>
      previous.map(task =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(previous =>
      previous.filter(task => task.id !== id)
    );
  }

  return (
    <div>
      <h1>Lista zadań</h1>

      <p>Wykonano {completedTasks} z {tasks.length} zadań</p>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nowe zadanie"/>
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map(task => (<Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask}/>
        ))}
      </ul>
    </div>
  );
}

export default App;


//Dla pana informacji: Podzielam opinię Ali, takich rzeczy nie daje się na 2 lekcje. my nie jesteśmy wystarczająco dobrzy z takich plików by móc zrobić w wielu przypadkach ten projekt na 2 sam w sobie.
// A tą wejściówką bo ktoś używał AI pan nie sprawi że ktoś przestanie używać AI a raczej powiększy pan grupę używającą AI ponieważ tylko ci co użyją AI zdążą zrobić takie programy. 
//Zwłaszcza jeśli nie mamy dostępu do wielu materiałów, jesteśmy pod presją czasową bo coś jest na ocenę czy poprostu mamy gorszy dzień. NIE MAMY WYSTARCZAJĄCEJ WIEDZY I UMIEJĘTNOŚCI