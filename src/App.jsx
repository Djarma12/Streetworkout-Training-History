import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";

const Home = lazy(() => import("./pages/Home"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const HomeLayout = lazy(() => import("./ui/HomeLayout"));
const Login = lazy(() => import("./pages/Login"));
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
              <Route element={<HomeLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="our-team" element={<OurTeam />} />
                <Route path="contact" element={<Contact />} />
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
