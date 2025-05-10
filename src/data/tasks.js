// Dummy data for task management app
export const tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Finish drafting the Q4 project proposal for client review",
    status: "pending",
    priority: "high",
    dueDate: "2023-11-15",
    category: "work",
    createdAt: "2023-10-28"
  },
  {
    id: 2,
    title: "Weekly team meeting",
    description: "Prepare agenda for Monday's team sync",
    status: "completed",
    priority: "medium",
    dueDate: "2023-11-06",
    category: "work",
    createdAt: "2023-10-25"
  },
  {
    id: 3,
    title: "Gym session",
    description: "Cardio and strength training",
    status: "pending",
    priority: "low",
    dueDate: "2023-11-07",
    category: "personal",
    createdAt: "2023-10-30"
  },
  {
    id: 4,
    title: "Buy groceries",
    description: "Get items for dinner party: vegetables, chicken, dessert",
    status: "pending",
    priority: "medium",
    dueDate: "2023-11-08",
    category: "personal",
    createdAt: "2023-11-01"
  },
  {
    id: 5,
    title: "Update resume",
    description: "Add recent project experiences and skills",
    status: "completed",
    priority: "high",
    dueDate: "2023-11-03",
    category: "personal",
    createdAt: "2023-10-26"
  },
  {
    id: 6,
    title: "File quarterly taxes",
    description: "Submit Q3 tax documents to accountant",
    status: "pending",
    priority: "high",
    dueDate: "2023-11-20",
    category: "finance",
    createdAt: "2023-10-31"
  }
];

// Categories for tasks
export const categories = [
  { id: 1, name: "work", color: "blue" },
  { id: 2, name: "personal", color: "green" },
  { id: 3, name: "finance", color: "purple" },
  { id: 4, name: "health", color: "red" },
  { id: 5, name: "learning", color: "amber" }
];

// Priority levels
export const priorities = [
  { id: 1, name: "low", color: "gray" },
  { id: 2, name: "medium", color: "yellow" },
  { id: 3, name: "high", color: "red" }
];