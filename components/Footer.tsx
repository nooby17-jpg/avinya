export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between text-sm text-subtext">
        <p>© {new Date().getFullYear()} Avinya — Solving the Future</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
