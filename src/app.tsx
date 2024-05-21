import { Navbar, Home, About, Skills, Projects, Footer } from "./components";
import { Certificates } from "./components/certificates/certificates";
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
  <Certificates />
  <Footer />
  </ThemeProvider>
  </>
  );
}
