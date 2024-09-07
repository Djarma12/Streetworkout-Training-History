import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ScrollToTop from "./ui/ScrollToTop";
import CheckLoginRoute from "./ui/CheckLoginRoute";
import StyledToaster from "./ui/StyledToaster";
import Likes from "./features/likes/Likes";

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
          <ScrollToTop>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route element={<HomeLayout />}>
                  <Route index element={<Home replace to="/" />} />
                  <Route path="/" element={<Home />} />
                  <Route path="services" element={<Services />} />
                  <Route path="our-team" element={<OurTeam />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }>
                  <Route element={<Navigate to="/trainings" />} />
                  <Route path="trainings" element={<Trainings />} />
                  <Route
                    path="trainings/new"
                    element={<CreateTrainingForm />}
                  />
                  <Route path="exercisers" element={<Exercisers />} />
                  <Route path="profile" element={<Profile />} />
                  <Route
                    path="exercisers/:exerciserId"
                    element={<ExerciserTrainingList />}
                  />
                </Route>
                <Route
                  path="login"
                  element={
                    <CheckLoginRoute>
                      <Login />
                    </CheckLoginRoute>
                  }
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </BrowserRouter>
        <Likes />
      </QueryClientProvider>
      <StyledToaster />
    </>
  );
}

export default App;
