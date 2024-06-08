import React, { useState, useEffect } from "react";
import CourtCard from "../components/CourtCard";

const Court = () => {
  const [selectedType, setSelectedType] = useState("type3");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const data = [
    {
      id:0,
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      type: "type1",
      details: "Details 1",
    },
    {
      id:1,
      image:
        "https://www.bronzinolaw.com/wp-content/uploads/Municipal_Court_Case_BL.jpg",
      type: "type2",
      details: "Details 2",
    },
    {
      id:2,
      image:
        "https://miro.medium.com/v2/resize:fit:512/1*1MyHearcq2GCb2WkAC4l4A.jpeg",
      type: "type1",
      details: "Details 3",
    },
    {
      id:3,
      image:
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
      type: "type1",
      details: "Details 4",
    },
    {
      id:4,
      image:
        "https://storage.googleapis.com/turbo-math.appspot.com/user-assets/gzMWmegNKSUlh64nFjBAIuqhqGr2/04-23-2023/image-to-image/image-to-image__5f419cc4305219bba97ae735b799a45d_1682284222619_1_1682284234.png",
      type: "type2",
      details: "Details 5",
    },
  ];

  const [alldata, setAlldata] = useState(data);

  useEffect(() => {
    if (selectedType === "type3") {
      setAlldata(data);
    } else {
      let filterData = data.filter((item, ind) => item.type === selectedType);
      setAlldata([...filterData]);
    }
  }, [selectedType]);

  return (
    <div className="my-[20px]">
      <h1 className="text-[30px] lg:text-[40px] pb-[20px] font-[600] text-center">
        Court Documents
      </h1>
      <div className="flex px-3 items-center justify-center w-full">
        <div className="w-full lg:w-[800px] bg-[#D9D9D9] rounded-[20px] px-[10px] lg:px-[30px] py-[15px]">
          <h1 className="text-[30px] lg:text-[40px]  font-[600] text-center">Title</h1>
          <p className="text-center pb-4 border-b border-b-black text-[20px] lg:text-[32px] font-[500]">
            more description
          </p>
          <div className="grid mt-5 grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3">
            <div className="lg:pr-4 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-black">
              <div className="w-full bg-[#FF9292] rounded-[20px] p-5">
                <div className="text-[18px] text-center lg:text-left border-b border-b-black">
                  Filter
                </div>
                <div className="flex mt-3 items-center gap-3 lg:items-start lg:flex-col">
                  <label className="flex items-center text-[12px] lg:text-[14px] gap-2">
                    <input
                      type="radio"
                      name="type"
                      className="w-5 h-5"
                      value="type1"
                      checked={selectedType === "type1"}
                      onChange={handleTypeChange}
                    />
                    Type 1
                  </label>

                  <label className="flex items-center text-[12px] lg:text-[14px] gap-2">
                    <input
                      type="radio"
                      name="type"
                      className="w-5 h-5"
                      value="type2"
                      checked={selectedType === "type2"}
                      onChange={handleTypeChange}
                    />
                    Type 2
                  </label>

                  <label className="flex items-center text-[12px] lg:text-[14px] gap-2">
                    <input
                      type="radio"
                      name="type"
                      className="w-5 h-5"
                      value="type3"
                      checked={selectedType === "type3"}
                      onChange={handleTypeChange}
                    />
                    Default <span className=" hidden lg:block">(show all)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 p-5 h-[600px] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
              {alldata.map((item, ind) => (
                <CourtCard key={ind} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Court;
