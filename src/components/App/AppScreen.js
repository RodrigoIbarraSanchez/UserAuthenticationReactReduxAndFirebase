import { Sidebar } from "../sidebar/Sidebar";
import { AppContentScreen } from "./AppContentScreen";

export const AppScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        <AppContentScreen />
      </main>
    </div>
  );
};
