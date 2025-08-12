import '../styles/Pagination.css';

const Pagination = ({ gamesPerPage, totalGames, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalGames / gamesPerPage);
    const pages = [];

    const maxVisiblePages = 5; // how many you want to show before adding "..."
    const leftBoundary = Math.max(2, currentPage - 2);
    const rightBoundary = Math.min(totalPages - 1, currentPage + 2);

    // Always show first page
    pages.push(1);

    // Add left ellipsis if needed
    if (leftBoundary > 2) {
        pages.push("...");
    }

    // Add pages between boundaries
    for (let i = leftBoundary; i <= rightBoundary; i++) {
        pages.push(i);
    }

    // Add right ellipsis if needed
    if (rightBoundary < totalPages - 1) {
        pages.push("...");
    }

    // Always show last page (if not already included)
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return (
        <div className="pagination">
            {pages.map((page, index) => (
                <button
                    key={index}
                    disabled={page === "..."}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => typeof page === "number" && setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination