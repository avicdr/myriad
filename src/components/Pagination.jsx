import React, { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { getTweetsAction } from '../redux/action';
import { useDispatch } from 'react-redux';
// make sure appropriate css is included in the project:
// see css sample below (or import Bootstrap styles)





const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props?.currentPage || 1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(10);

  console.log(currentPage, 'casdfasd');

  useEffect(() => {
    const pagesCount = props?.totalData / limit;
    // console.log(Math.ceil(pagesCount + 0.5),pagesCount + 0.5,'props?.totalData') 
    setTotalPage(Math.ceil(pagesCount))

  });

  useEffect(() => {
    props.setPageNo(currentPage - 1)
    changePage()
  }, [currentPage])

  const changePage = () => {
    props?.getApi({ skip: currentPage - 1 })
    // .then((result) => {
    //   console.log(result)
    // }).catch((err) => {
    //   console.log(err)

    // });
  };
  return (
    <div className='flex justify-end '>
      <ResponsivePagination
        current={currentPage}
        total={totalPage}
        onPageChange={setCurrentPage}
        className='pagination justify-content-end  '
      />
    </div>
    // <nav aria-label="Page navigation example d-flex justify-content-center w-100">
    //   <ul className="pagination">
    //         <li className="page-item"  onClick={()=> currentPage!==1 &&setCurrentPage(currentPage-1)}>
    //           <a className="page-link" href="#" aria-label="Previous">
    //             <span aria-hidden="true">«</span>
    //           </a>
    //         </li>
    //     {
    //       Array.from({ length: totalPage }, (_, i) => i + 1).map((item, index) => (

    //     <li className="page-item" onClick={()=>setCurrentPage(item)} key={index}>
    //       <div className={`page-link  ${currentPage==item && 'active-btn'}`}  href="#">
    //       {  item}
    //       </div>
    //     </li>
    //       ))
    //     }
    //     {/* <li className="page-item">
    //       <a className="page-link" href="#">
    //         2
    //       </a>
    //     </li>
    //     <li className="page-item">
    //       <a className="page-link" href="#">
    //         3
    //       </a>
    //     </li> */}
    //     <li className="page-item" onClick={()=> currentPage<totalPage &&setCurrentPage(currentPage+1)}>
    //       <a className="page-link" href="#" aria-label="Next">
    //         <span aria-hidden="true">»</span>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;
