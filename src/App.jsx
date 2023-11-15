import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./ui/ProtectedRoute";
import GlobalStyles from "./styles/GlobalStyles";
import SpinnerFullPage from "./ui/SpinnerFullPage";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

// import ExerciserTrainingList from "./features/exercisers/ExerciserTrainingList";
// import AppLayout from "./ui/AppLayout";
// import Trainings from "./pages/Trainings";
// import Exercisers from "./pages/Exercisers";
// import CreateTrainingForm from "./features/trainings/CreateTrainingForm";

/* 
  Before
  dist/index.html                    0.97 kB │ gzip:   0.42 kB
  dist/assets/index-bfae6d9b.js  1,137.31 kB │ gzip: 337.44 kB

  After
  dist/assets/helpers-62221bac.js                 24.80 kB │ gzip:   6.76 kB
  dist/assets/contants-886efe03.js               245.47 kB │ gzip:  75.50 kB
  dist/assets/useTrainingList-d7e3170a.js        408.36 kB │ gzip: 110.25 kB
  dist/assets/index-1db3d014.js                  425.97 kB │ gzip: 136.49 kB
  and other small
*/

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Trainings = lazy(() => import("./pages/Trainings"));
const Exercisers = lazy(() => import("./pages/Exercisers"));
const ExerciserTrainingList = lazy(() =>
  import("./features/exercisers/ExerciserTrainingList")
);
const CreateTrainingForm = lazy(() =>
  import("./features/trainings/CreateTrainingForm")
);

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
          <Suspense fallback={<SpinnerFullPage />}>
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
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
