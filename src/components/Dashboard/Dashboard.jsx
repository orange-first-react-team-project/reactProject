import { Navbar } from '../exports'
import './style.css'

function Dashboard() {
  // Mock task data (Replace with real data from state or API)
  const tasks = {
    completed: ["Task A", "Task B", "Task C"],
    pending: ["Task D", "Task E"],
    inProgress: ["Task F", "Task G"],
    urgent: ["Task H"],
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="task-grid">
          <div className="category urgent">
            <h1>Urgent</h1>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </div>

          <div className="category in-progress">
            <h1>In Progress</h1>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </div>

          <div className="category pending">
            <h1>Pending</h1>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </div>

          <div className="category completed">
            <h1>Completed</h1>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
