import { useEffect, useState } from "react";
import { getWithToken } from "../../../utils/request"
import Impression from "../../../components/Static/Impression.png";
import Likes from "../../../components/Static/Likes.png";
import Reach from "../../../components/Static/Reach.png";
import Mention from "../../../components/Static/Mention.png";

function HashtagKeyword() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWithToken("impressions-reach");
        const responseData = response.data.data
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (

   
    <div>
      <table className="table table-fixed">
        <thead>
         <tr>
            <th>#</th>
             <th className="text-left" style={{paddingLeft:"4.1rem"}} >Hashtag</th>
           
            {/* <th><img src={Mention} />
             </th>
             <th><img src={Likes} />
          </th> */}
            <th>Reach</th>
            <th>Impression</th>
          </tr>
        </thead> 
      </table>

      <div className="card-shadow  mx-0 " style={{ height: "351px" }}>
        <div className="table">
          <table className="table table-fixed">
             
           
            <tbody style={{ overflow: 'scroll', maxHeight: '400px' }}>

             {data.map((d, i) => (
         <tr key={d.hashtag}>
               <td>{i + 1}.</td>
              <td style={{paddingLeft: "106px"}}>{d.hashtag}</td>
              {/* <td>2k</td>
              <td>5k</td> */}
            <td style={{paddingRight: "159px"}}>{d.reach}</td>
            <td style={{paddingRight: "58px"}}>{d.impression}</td>
            <td></td>
              <td ></td>
           </tr>
        ))}
         </tbody>
          </table>
        </div>
      </div>


    </div>

  );
}

export default HashtagKeyword;