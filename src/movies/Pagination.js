import React from 'react';
// import classNamenames from 'classNamenames';
import { usePagination, DOTS } from '../utils/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="d-flex flex-row">
      {/* Left navigation arrow */}
      <div className="p-2" onClick={onPrevious}>
        <button type="button" className="btn btn-light">
          Anterior
        </button>
      </div>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <div className="p-2">
              <button type="button" className="btn btn-light" disabled>
                ...
              </button>
            </div>
          );
        }

        // Render our Page Pills
        return (
          <div className="p-2" onClick={() => onPageChange(pageNumber)}>
            <button type="button" className="btn btn-light">
              {pageNumber}
            </button>
          </div>
        );
      })}
      {/*  Right Navigation arrow */}
      <div className="p-2" onClick={onNext}>
        <button type="button" className="btn btn-light">
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
