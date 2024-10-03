function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 w-full h-16 flex items-center justify-center bg-black_100">
      <p className="font-bold">
        &copy; {year} - Code By{" "}
        <a
          href="https://github.com/paulopbi"
          className="text-slate-50"
          target="_blank"
        >
          Paulo Victor
        </a>
      </p>
    </footer>
  );
}

export default Footer;
