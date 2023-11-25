

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
    <table className="w-100">
      <thead>
        <tr  className="dashboardtable" >
          <th>#</th>
          <th>Hashtag</th>
          <th><img src={Mention} alt="" className="h-fit-content mri-6" />
          </th>
          <th><img src={Likes} alt="" className="h-fit-content mri-6" />
          </th>
          <th><img src={Reach} alt="" className="h-fit-content mri-6" /></th>
          <th><img src={Impression} alt="" className="h-fit-content mri-6" /></th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={d.hashtag} className="py-3">
            <td>{i + 1}.</td>
            <td>{d.hashtag}</td>
            <td>2k</td>
            <td>5k</td>
            <td>{d.reach}</td>
            <td>{d.impression}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HashtagKeyword;