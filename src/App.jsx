import { useEffect } from "react";
import "./App.css";
import ColumnContent from "./components/ColumnContent";
import DataService from "./services/dataService";
import useStore from "./store";
import Navbar from "./components/Navbar";
import { availablePriorities, availableStatuses } from "./constants";

function App() {
  const updateTickets = useStore((s) => s.updateTickets);
  const updateUsers = useStore((s) => s.updateUsers);
  const users = useStore((s) => s.users);
  const tickets = useStore((s) => s.tickets);
  const groupBy = useStore((s) => s.groupBy);
  const orderBy = useStore((s) => s.orderBy);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { tickets, users } = await DataService.getData();
        updateTickets(tickets);
        updateUsers(users);
      };
      fetchData();
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  const getKanbanRenderData = () => {
    const renderData = [];
    if (groupBy === "status") {
      for (let status of availableStatuses) {
        renderData.push({
          title: status,
          content:
            orderBy === "title"
              ? tickets
                  .filter((t) => t.status === status)
                  .sort((t1, t2) => {
                    if (t1[orderBy] > t2[orderBy]) return 1;
                    if (t1[orderBy] < t2[orderBy]) return -1;
                    return 0;
                  })
              : tickets
                  .filter((t) => t.status === status)
                  .sort((t1, t2) => {
                    if (t1[orderBy] < t2[orderBy]) return 1;
                    if (t1[orderBy] > t2[orderBy]) return -1;
                    return 0;
                  }),
        });
      }
    } else if (groupBy === "priority") {
      for (let item of availablePriorities) {
        renderData.push({
          title: item.title,
          content: tickets
            .filter((t) => t.priority === item.value)
            .sort((t1, t2) => {
              if (t1[orderBy] > t2[orderBy]) return 1;
              if (t1[orderBy] < t2[orderBy]) return -1;
              return 0;
            }),
        });
      }
    } else if (groupBy === "users") {
      for (let item of users) {
        renderData.push({
          title: item.name,
          content:
            orderBy === "title"
              ? tickets
                  .filter((t) => t.userId === item.id)
                  .sort((t1, t2) => {
                    if (t1[orderBy] > t2[orderBy]) return 1;
                    if (t1[orderBy] < t2[orderBy]) return -1;
                    return 0;
                  })
              : tickets
                  .filter((t) => t.userId === item.id)
                  .sort((t1, t2) => {
                    if (t1[orderBy] < t2[orderBy]) return 1;
                    if (t1[orderBy] > t2[orderBy]) return -1;
                    return 0;
                  }),
        });
      }
    }
    return renderData;
  };
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        {getKanbanRenderData().map((item, index) => (
          <ColumnContent key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
