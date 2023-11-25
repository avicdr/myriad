import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ConnectedProps, connect, useDispatch } from "react-redux";
import { ITrendingLocationPost, getNowTrending } from "../../redux/action";
import { ReduxStore } from "../../redux/reducer/reducer";

const MapState = (State: ReduxStore) => ({ ...State.State });
const MapDispatch = {
    getNowTrending: getNowTrending,
};
const connector = connect(MapState, MapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const HashtgGraph = (props: Props) => {
    const [category, setCategory] = useState([""]);
    const [data, setData] = useState([]);

    console.log(props.trendingPosts,'props.trendingPosts')
    useEffect(() => {
            const dataIns = [];
            const catIns = [];
            props.trendingPosts?.slice(0, 25)?.forEach((element: ITrendingLocationPost) => {
                dataIns.push(element?.tweet_volume);
                catIns.push(element?.name);
            });
            setCategory(catIns);
            setData(dataIns);
    }, [props.trendingPosts]);

    return (
        <div className="w-100">
            <Chart
                options={{
                    chart: {
                        id: "apexchart-example",
                    },
                    xaxis: {
                        categories: category,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                }}
                series={[
                    {
                        name: "Tweet Volume",
                        data: data,
                    },
                ]}
                type="bar"
                height={700}
            />
        </div>
    );
};

export default connector(HashtgGraph);
