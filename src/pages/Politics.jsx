import React, { useEffect, useState } from "react";
import { politics_data } from "../icons/politics";
import {
  Check,
  Current,
  Established,
  Expiring,
  Led,
  Name,
  Updated,
  Void,
} from "../icons/icons";

const Politics = () => {
  const [allData, setAllData] = useState(politics_data);
  const [data, setdata] = useState(politics_data[1]);
  const [ratings, setRatings] = useState(0);
  const [typeData, setTypeData] = useState(0);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {


    if (clicked) {

      if (ratings === 0 && typeData !== 0) {
        let type_filter = politics_data.filter(
          (item, ind) => item.shape === typeData
        );
        setAllData([...type_filter]);
      }
      else if (typeData === 0 && ratings !== 0) {
        let type_filter = politics_data.filter(
          (item, ind) => item.ratings === ratings
        );
        setAllData([...type_filter]);
      }
      else if (typeData === 0 && ratings === 0) {
        setAllData([...politics_data]);
      }
      else {
        let filter_ratings = politics_data.filter(
          (item, ind) => item.ratings === ratings
        );
        let type_filter = filter_ratings.filter(
          (item, ind) => item.shape === typeData
        );
        setAllData([...type_filter]);
      }


    }
  }, [ratings, typeData]);

  function logicRating(val) {
    return ratings === val ? 0 : val
  }
  function logicType(val) {
    return typeData === val ? 0 : val
  }
  return (
    <div className="flex px-3  items-center justify-center ">
      <div className=" my-[30px] w-full lg:w-[700px] bg-[#F3F3F3] py-16 lg:px-16 rounded-[20px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <h1 className="text-center leading-[48px] mb-5 lg:mb-0 comi font-bold text-[30px] lg:text-[40px]">
            Politics and relationships
          </h1>
          <div className=" flex gap-9">
            <div className="relative">
              {data.icon}
              <div className="absolute -top-2 left-4 z-20">
                <Established />
              </div>
              <div className="absolute top-[24px] -right-7 z-20">
                <Led />
              </div>
              <div className="absolute top-[61px] -right-[62px] z-20">
                <Name />
              </div>
              <div className="absolute -bottom-2 left-4 z-20">
                <Updated />
              </div>
              <p className=" absolute comi text-[12px] font-[400] top-2 left-2 z-10">
                {data.top_left.title}
              </p>
              <p className=" absolute comi text-[10px] font-[400] top-2 right-2 z-10">
                {data.top_right.title}
              </p>
              <div className=" absolute  top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <h1 className="text-[24px] comi font-bold">
                  {data.center.title}
                </h1>
              </div>
              <p className=" absolute comi text-[12px] font-[400] bottom-2 left-2 z-10">
                {data.bottom_left.title}
              </p>
            </div>
            <div className="">
              <p className="text-[10px] mt-[7px] comi whitespace-nowrap">
                {data.top_left.detail}
              </p>
              <p className="text-[10px] mt-[9px] comi whitespace-nowrap">
                {data.top_right.detail}
              </p>
              <p className="text-[10px] mt-[9px] comi whitespace-nowrap">
                {data.center.detail}
              </p>
              <p className="text-[10px] mt-[8px] comi whitespace-nowrap">
                {data.bottom_left.detail}
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-[60px] items-end justify-center gap-4">
          <div
            onClick={() => {
              setRatings(logicRating(1));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            {ratings === 1 && <Check />}
            <div className="w-[12px] h-[12px] bg-[#F95F5F]"></div>
            <p className="text-center comi font-[700] text-[10px]">
              Very Unsatisfied
            </p>
          </div>
          <div
            onClick={() => {
              setRatings(logicRating(2));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            {ratings === 2 && <Check />}
            <div className="w-[12px] h-[12px] bg-[#FF8B6C]"></div>
            <p className="text-center comi font-[700] text-[10px]">
              Unsatisfied
            </p>
          </div>
          <div
            onClick={() => {
              setRatings(logicRating(3));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            {ratings === 3 && <Check />}
            <div className="w-[12px] h-[12px] bg-[#D8E9EF]"></div>
            <p className="text-center comi font-[700] text-[10px]">Neutral</p>
          </div>
          <div
            onClick={() => {
              setRatings(logicRating(4));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            {ratings === 4 && <Check />}
            <div className="w-[12px] h-[12px] bg-[#C5E99B]"></div>
            <p className="text-center comi font-[700] text-[10px]">Satisfied</p>
          </div>
          <div
            onClick={() => {
              setRatings(logicRating(5));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            {ratings === 5 && <Check />}
            <div className="w-[12px] h-[12px] bg-[#4ADDDD]"></div>
            <p className="text-center comi font-[700] text-[10px]">
              Very Satisfied
            </p>
          </div>
        </div>
        <div className="flex pb-[30px] pt-[20px] border-b border-black items-start justify-center gap-4">
          <div
            onClick={() => {
              setTypeData(logicType(1));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            <Expiring />
            <p className="text-center comi font-[700] text-[10px]">Expiring</p>
            {typeData === 1 && <Check />}
          </div>
          <div
            onClick={() => {
              setTypeData(logicType(2));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            <Void />
            <p className="text-center comi font-[700] text-[10px]">Void</p>
            {typeData === 2 && <Check />}
          </div>
          <div
            onClick={() => {
              setTypeData(logicType(3));
              setClicked(true);
            }}
            className="flex cursor-pointer items-center flex-col gap-2"
          >
            <Current />
            <p className="text-center comi font-[700] text-[10px]">Current</p>
            {typeData === 3 && <Check />}
          </div>
        </div>
        <div className="flex pt-[20px] items-center   flex-wrap justify-center">
          {allData.map((item, ind) => (
            <div
              key={ind}
              onClick={() => setdata(item)}
              className="relative transform  scale-75 cursor-pointer hover:scale-90 duration-300 transition-all ease-linear"
            >
              {item.icon}

              <p className=" absolute comi text-[12px] font-[400] top-2 left-2 z-10">
                {item.top_left.title}
              </p>
              <p className=" absolute comi text-[10px] font-[400] top-2 right-2 z-10">
                {item.top_right.title}
              </p>
              <div className=" absolute  top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <h1 className="text-[24px] comi font-bold">
                  {item.center.title}
                </h1>
              </div>
              <p className=" absolute comi text-[12px] font-[400] bottom-2 left-2 z-10">
                {item.bottom_left.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politics;
