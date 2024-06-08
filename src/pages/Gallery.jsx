import React, { useState, useEffect } from "react";
import CourtCard from "../components/CourtCard";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedType, setSelectedType] = useState("type3");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const data = [
    {
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      id: 1,
      details: "this section displays metadata plus admin-input text",
    },
    {
      image:
        "https://www.bronzinolaw.com/wp-content/uploads/Municipal_Court_Case_BL.jpg",
      id: 2,
      details: "this section displays metadata plus admin-input text",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:512/1*1MyHearcq2GCb2WkAC4l4A.jpeg",
      id: 3,
      details: "this section displays metadata plus admin-input text",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
      id: 4,
      details: "this section displays metadata plus admin-input text",
    },
    {
      image:
        "https://storage.googleapis.com/turbo-math.appspot.com/user-assets/gzMWmegNKSUlh64nFjBAIuqhqGr2/04-23-2023/image-to-image/image-to-image__5f419cc4305219bba97ae735b799a45d_1682284222619_1_1682284234.png",
      id: 5,
      details: "this section displays metadata plus admin-input text",
    },
  ];

  const [alldata, setAlldata] = useState(data);


  return (
    <div className="my-[20px]">
      <h1 className=" text-[30px] lg:text-[40px] pb-[20px] font-[600] text-center">Gallery</h1>
      <div className="flex px-3 items-center justify-center w-full">
        <div className="lg:w-[800px] bg-[#D9D9D9] rounded-[20px] px-[10px] lg:px-[30px] py-[15px]">
          <div className="flex items-center pb-4 border-b border-black justify-center">
            <input
         
              type="text"
              className="bg-white rounded-[15px] w-full lg:w-auto px-4 py-3 outline-none text-sm text-black"
              placeholder="Search by id..."
            />
          </div>
          <div className="h-[600px] overflow-y-auto">
            {alldata.map((item, ind) => (
              <Link to={`/details/${item.id}`} key={ind} className="grid border-b pb-4 lg:pb-0 lg:border-b-0 border-b-black mt-5 grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="h-[167px] p-2 bg-[#FE8C8C] w-full">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="lg:col-span-2 bg-[#FE8C8C] lg:mr-4 text-[18px] text-center p-3 flex items-center justify-center">{item.details}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
