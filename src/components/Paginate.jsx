import CardsWrapper from './CardsWrapper';
import ReactPaginate from 'react-paginate';
const itemsPerPage = 12;

const Paginate = ({
  currentItems,
  pageCount,
  setItemOffset,
  exercises,
  currentPage,
  setCurrentPage,
}) => {
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };
  return (
    <>
      <CardsWrapper currentItems={currentItems} />
      <div className="flex justify-center mt-16 items-center">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          forcePage={currentPage}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default Paginate;
