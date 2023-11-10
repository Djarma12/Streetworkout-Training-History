import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProtectedRoute from "./ui/ProtectedRoute";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Trainings from "./pages/Trainings";
import CreateTrainingForm from "./features/trainings/CreateTrainingForm";
import Exercisers from "./pages/Exercisers";
import ExerciserTrainingList from "./features/exercisers/ExerciserTrainingList";
import Profile from "./pages/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/trainings" />} />
              <Route path="trainings" element={<Trainings />} />
              <Route path="trainings/new" element={<CreateTrainingForm />} />
              {/* <Route
                path="trainings/:trainingId"
                element={<TrainingDetail />}
              /> */}
              <Route path="exercisers" element={<Exercisers />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="exercisers/:exerciserId"
                element={<ExerciserTrainingList />}
              />
              {/* <Route
                path="exercisers/:exerciserId/:exerciserTrainingId"
                element={<ExerciserTrainingDetail />}
              /> */}
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
