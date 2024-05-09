import { Navbar, Home, About, Skills, Projects, Footer } from "./components";
import { ThemeProvider } from "./context/theme-provider";

export function App() {
  return (
  <>
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Footer />
  </ThemeProvider>
  </>
  );
}
