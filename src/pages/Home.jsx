import React from "react";

const Home = () => {

  return (
    <div className=" py-[20px] bg-[#F1FFF4]">
      <div className="max-w-[1120px] mx-auto">
        <div className=" bg-white border border-black  rounded-[12px] py-5 flex items-center flex-col gap-5">
          <img className="w-[177px]" src="/home.png" alt="" />
          <p className="text-[20px] text-center">Are you in a condition where finding legal help is difficult ? Dont Worry <br />
            We are here to help you</p>
          <button className="text-white font-medium bg-[#4D7D5D] px-14 rounded-[8px] py-[10px]">
            GET HELP
          </button>
        </div>
        <h2 className='py-5 text-[32px] font-semibold'>Services</h2>
<div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
{[1,2,3,4,5,6].map((item,ind)=>(
  <div className="bg-white rounded-[8px] flex items-center flex-col gap-3 border border-[#00000066] p-5">
  <img src={`/s${item}.png`} className="w-[60px]" alt="" />
  <p className="text-[#6C6C6C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis convallis facilisis. Fusce vel nulla diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut risus vehicula, cursus ex sit amet, sodales.</p>
  </div>
))}
</div>
      </div>

    </div>
  );
};

export default Home;
