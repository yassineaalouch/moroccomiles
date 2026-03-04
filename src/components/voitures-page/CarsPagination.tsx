type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export function CarsPagination({
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-600"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onChangePage(Math.max(1, currentPage - 1))}
        className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-medium text-zinc-700 shadow-sm transition hover:border-amber-500 hover:text-amber-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Précédent
      </button>
      <div className="hidden items-center gap-1 sm:flex">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onChangePage(page)}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition ${
              page === currentPage
                ? "bg-amber-500 text-zinc-900 shadow-sm"
                : "text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(Math.min(totalPages, currentPage + 1))}
        className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-medium text-zinc-700 shadow-sm transition hover:border-amber-500 hover:text-amber-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Suivant
      </button>
    </nav>
  );
}

