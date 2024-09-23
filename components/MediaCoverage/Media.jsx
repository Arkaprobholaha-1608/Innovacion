import React from 'react';

const Media = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row p-5 items-center w-full rounded-xl bg-[#0F0F0F] space-x-6 m-6 shadow-[0px_0px_20px_rgba(22,66,60,1)]`}>
      {isEven ? (
        <>
          <img src="/memoryBox.png" alt="images" className="h-[150px] w-[150px] object-cover" />
          <div className="flex flex-col space-y-3 md:text-left w-full">
            <p className="text-4xl text-gray-200 font-[Tasa-SemiBold] mt-4">Title {index + 1}</p>
            <p className="text-[15px] text-gray-400 font-[Tasa-Regular]">
              Institute of Engineering & Management (IEM), leading engineering and management college in Kolkata, organized the 10th edition of its annual techno-management fest, Innovación 2023 on 10 March. The fest showcased the most recent developments in innovation, entrepreneurship, and technology. More than 25 events were scheduled for the tech fest, which started on Friday evening and will continue until Sunday.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col space-y-3 md:text-left w-full justify-center items-center">
            <p className="text-4xl text-gray-200 font-[Tasa-SemiBold] mt-4">Title {index + 1}</p>
            <p className="text-[15px] text-gray-400 font-[Tasa-Regular]">
              Institute of Engineering & Management (IEM), leading engineering and management college in Kolkata, organized the 10th edition of its annual techno-management fest, Innovación 2023 on 10 March. The fest showcased the most recent developments in innovation, entrepreneurship, and technology. More than 25 events were scheduled for the tech fest, which started on Friday evening and will continue until Sunday.
            </p>
          </div>
          <img src="/memoryBox.png" alt="images" className="h-[150px] w-[150px] object-cover" />
        </>
      )}
    </div>
  );
};

export default Media;
