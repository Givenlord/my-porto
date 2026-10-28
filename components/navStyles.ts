// Dipakai NavLinks dan fallback-nya di Header biar tampilannya persis sama.
// Menu aktif ditandai pakai background, bukan font tebal, supaya lebarnya ga berubah.
export const navListClass = "grid grid-cols-4 gap-1 sm:flex";

export const navLinkClass =
  "block rounded-md px-3 py-1.5 text-center text-sm font-medium text-muted transition-colors hover:text-foreground aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent";
