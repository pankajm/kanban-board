import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useStore = create()(
  persist(
    (set) => ({
      tickets: [],
      updateTickets: (data) => set(() => ({ tickets: data })),
      users: [],
      updateUsers: (data) => set(() => ({ users: data })),
      groupBy: "status",
      updateGroupBy: (data) => set(() => ({ groupBy: data })),
      orderBy: "priority",
      updateOrderBy: (data) => set(() => ({ orderBy: data })),
    }),
    { name: "kanban-storage" } // this is for persist
  )
);

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Kanban Store", useStore);

export default useStore;
