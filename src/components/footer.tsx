export function Footer() {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <footer className="flex justify-center items-center border-t border-border/40 h-14 mt-10">
      <p className="text-muted-foreground hover:text-white">
        Roger valentim &copy;{year}
      </p>
    </footer>
  );
}
