import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHashtag, getSearchHashtagData } from "../../../redux/hashtag";
import Instagram from "../../../components/Static/Instagram.png";
import Facebook from "../../../components/Static/FacebookLogo.png";
import { getReportAction, gethashtagReportAction, sentimentColor } from "../../../redux/action";
import Positivehastag from "./Positivehastag";
import { ReduxStore } from "../../../redux/reducer/reducer";
import Negativehastag from "./Negativehastag";
import NeutralHashtags from "./Negativehastag";
import NegationMenstion from "./NegativeMenstion";
import PositiveMenstion from "./PositiveMenstion";
import { useHistory } from "react-router";
import { parseQuery, startLoader, stopLoader } from "../../../utils/functions";
import TweetSentiments from "./TweetSentiments";
import NeutralReport from "./NeturalReport";


const SearchHashtag = () => {
    const history = useHistory();
    const query = parseQuery(history.location.search);
    const { report } = useSelector((state: ReduxStore) => state.State);
    const {hashtagreport  } = useSelector((state: ReduxStore) => state.State);

    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState("");
    const [searchText, SetSerachText] = useState<any>()
    const [ReportList, setReportList] = useState<any>();
    const [tablereport, setTablereport] = useState([]);
    const [searchhashtag, SetSearchHashtag] = useState("")
    const [positiveData, setPositiveData] = useState([]);
    const [negativeData, setNegativeData] = useState([]);
    const [positiveMentionsData, setPositiveMentionsData] = useState([]);
    const [negativeMentionsData, setNegativeMentionsData] = useState([]);
    const [neutralData, setNeutralData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);
    const [heading, setHeadingData] = useState("");
    const [show , setshow ] = useState(false)

    useEffect(() => {
        console.log(searchData, "report");
        
        getReportList(searchData);
    }, [report]);

    const handleSearch = () => {
        getReportList(searchData);
        setHeadingData(searchData)
        SetSearchHashtag(heading)
       

   
    };

    

    const getReportList = async (data: any) => {
        startLoader();
        try 
        {
        if(searchData.charAt(0) === '#'){
            const result = await dispatch(gethashtagReportAction({ hashtag: searchData }));
            console.log("error", data);
            // console.log(result.sentiment_kpi)
            setReportList(result);
            setSearchData("");
            stopLoader();

            const tablereportData = hashtagreport && hashtagreport?.data?.filter((item: any) => item.sentiments === "Positive" || item.sentiments === "Negative" || item.sentiments === "Neutral");
            console.log(tablereport)
            setTablereport(tablereportData)
            const positiveReportData = hashtagreport && hashtagreport?.data?.filter((item: any) => item.sentiments === "Positive");
            const negativeReportData = hashtagreport && hashtagreport?.data?.filter((item: any) => item.sentiments === "Negative");
            const neutralReportData = hashtagreport && hashtagreport?.data?.filter((item: any) => item.sentiments === "Neutral");
            setPositiveData(positiveReportData);
            setNegativeData(negativeReportData)
            setNeutralData(neutralReportData);

            const sentimentData = hashtagreport && hashtagreport?.sentiment_kpi;

            const pieDataForTweet = sentimentData ? [sentimentData?.positive_tweets, sentimentData?.negative_tweets, sentimentData?.neutral_tweets] : [];
            setPieChartData(pieDataForTweet);

        }
      
        
    
           
        else{
            const result = await dispatch(getReportAction({ query: searchData }));
            console.log("error", data);
            // console.log(result.sentiment_kpi)
            setReportList(result);
            setSearchData("");
            stopLoader();

            const tablereportData = report && report?.data?.filter((item: any) => item.sentiments === "Positive" || item.sentiments === "Negative" || item.sentiments === "Neutral");
            console.log(tablereport)
            setTablereport(tablereportData)
            const positiveReportData = report && report?.data?.filter((item: any) => item.sentiments === "Positive");
            const negativeReportData = report && report?.data?.filter((item: any) => item.sentiments === "Negative");
            const neutralReportData = report && report?.data?.filter((item: any) => item.sentiments === "Neutral");
            setPositiveData(positiveReportData);
            setNegativeData(negativeReportData)
            setNeutralData(neutralReportData);

            const sentimentData = report && report?.sentiment_kpi;

            const pieDataForTweet = sentimentData ? [sentimentData?.positive_tweets, sentimentData?.negative_tweets, sentimentData?.neutral_tweets] : [];
            setPieChartData(pieDataForTweet);

        } 
    } 

        
        catch (error) {
            stopLoader();
        }
    }
    
  
    





    return (
        <>
            <div className="cont">
                <h6>Home / Twitter / Repots</h6>
                <div className="d-flex justify-content-between">
                    <h2 className="status mb-4 pb-4">Reports and Analysis</h2>
                    <div className="p-3 d-flex justify-content-end">
                        {/* <a href="/instagram/reports">
                            <img src={Instagram} className="px-2" />
                        </a> */}
                        <a href="/facebook/reports">
                            <img src={Facebook} className="px-2" />
                        </a>
                    </div>
                </div>

                <div className="d-flex bs p-3 justify-content-between bg-white mt-1 mb-4 border-circle">

                    {heading ? (
                        <>

                            <h2 className="mt-1">{heading}</h2>

                        </>
                    ) : (

                        <>
                        <h2>Enter search hashtag and keyword</h2>
                        </>


                    )}

                    <div className=" col-7 d-flex">
                        <div className="searchHash col-10 p-0 border-none">
                            {/* <Image src={Search} alt="none" /> */}
                            <input
                                type="text"
                                className="search col-12"
                                placeholder="Enter Hashtag,keyword"
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                            />
                            <div
                                className="cursor-pointer bg-primary px-4  mx-2 rounded-4 h-100 d-flex justify-content-center align-items-center  "
                                onClick={() => handleSearch()}
                            >
                                <span>Search</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div />
                <div>
                    <div className="row mb-5">
                        <div className="col">

                            {positiveData ? (
                                <>
                                    <div className="mx-0 htl_2" >
                                        <h4 className="bold p-3 card-header">Positive Tweet</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="details w-100 overflow-scroll">

                                                {positiveData?.length > 0 && positiveData?.map((item: any, index) => <Positivehastag item={item} index={index} />)}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (

                                <></>


                            )}

                        </div>
                        <div className="col">

                            {negativeData ? (
                                <>
                                    <div className="mx-0 htl_2" >
                                        <h4 className="bold p-3 card-header">Negative Tweet</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="details w-100 overflow-scroll">
                                                {negativeData?.length > 0 && negativeData?.map((item: any, index) => <Negativehastag item={item} index={index} />)}
                                            </div>
                                        </div>
                                    </div>

                                </>
                            ) : (
                                <></>
                            )}

                        </div>
                        <div className="col">

                            {positiveData ? (
                                <>
                                    <div className="mx-0 htl_2" >
                                        <h4 className="bold p-3 card-header">Positive Mentions</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="details w-100 overflow-scroll">
                                                {positiveData?.length > 0 && positiveData?.map((item: any, index) => <PositiveMenstion item={item} index={index} />)}
                                            </div>
                                        </div>
                                    </div>

                                </>
                            ) : (
                                <></>
                            )}

                        </div>
                    </div>
                    <div className="report row" >
                        <div className="col">

                            {negativeData ? (
                                <>
                                    <div className="mx-0 " >
                                        <h4 className="bold p-3 card-header">Negative Mentions</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="details w-100 overflow-scroll">
                                                {negativeData?.length > 0 && negativeData?.map((item: any, index) => <NegationMenstion item={item} index={index} />)}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}

                        </div>

                        <div className="col">

                            {neutralData ? (
                                <>
                                    <div className="mx-0 htl_2" >
                                        <h4 className="bold p-3 card-header">Neutral Hashtags</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="details w-100 overflow-scroll">
                                                {neutralData?.length > 0 && neutralData?.map((item: any, index) => <NeutralReport item={item} index={index} />)}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}

                        </div>

                        <div className="col">


                            {pieChartData && pieChartData?.length !== 0 ? (
                                <>
                                    <div className="mx-0 htl_2" >
                                        <h4 className="bold p-3 card-header">Tweet Sentiments</h4>
                                        <div className="card-shadow  mx-0 htl_2">
                                            <div className="d-flex justify-content-center">
                                                <TweetSentiments legendShow={true} series={pieChartData} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}


                        </div>
                    </div>
                </div>
            </div>
            {tablereport ? (
                <>
                    <div className="reporttable row">
                        <div className="col-12">
                            <div className="mx-0 htl_2">
                                <div className="card-header">
                                    <div className="row ">
                                        <div className="col-1">

                                            <h4 className="bold text-white pl-4">#</h4>


                                        </div>
                                        <div className="col-2" >
                                            <h4 className="pr-3 bold text-white">Sentiments</h4>
                                        </div>
                                        <div className="col-6">
                                            <h4 className="bold text-white">Tweet</h4>
                                        </div>
                                        <div className="col-1">
                                            <h4 className="bold text-white">Username</h4>

                                        </div>
                                        <div className="col-2 text-center">
                                            <h4 className="bold text-white">Location</h4>

                                        </div>

                                    </div>
                                </div>

                                <div className="card-report htl_2" style={{ height: "500px" }}>
                                    {tablereport?.length > 0 && tablereport?.map((item: any, index) =>
                                        <>

                                            <div className="tablereport row">
                                                <div className="col-1" >
                                                    <h6 className="pl-4">{index + 1}.</h6>
                                                </div>


                                                <div className="col-1" >
                                                    <h6 className={`${sentimentColor[item.sentiments]} justify-text`}>
                                                        {item.sentiments}
                                                    </h6>
                                                </div>


                                                <div className="col-7" >
                                                    <p className="text-justify">
                                                        {/* {item.text?.length > 50
                                                                ? `${item.text.slice(
                                                                    0,
                                                                    50
                                                                )} ...`
                                                                : item.text} */}
                                                        {item.text}
                                                    </p>
                                                </div>

                                                <div className="col-1" >
                                                    <h6><a href={`https://twitter.com/${item.username}`} target='_blank' className="username">{item.username}</a> </h6>
                                                </div>


                                                <div className="col-2" >
                                                    <h6 className="text-center">

                                                        {item.location &&
                                                            item.location.length >
                                                            50
                                                            ? item.location.slice(
                                                                0,
                                                                50
                                                            )
                                                            : item.location ||
                                                            'N/A'}
                                                    </h6>
                                                </div>

                                            </div>





                                        </>

                                    )}

                                </div>
                            </div>
                        </div>
                    </div>


                </>
            ) : (
                <></>


            )}
            <div className="reporttable row" style={{ marginTop: "200px" }}>

            </div>



        </>
    );
};

export default SearchHashtag;


