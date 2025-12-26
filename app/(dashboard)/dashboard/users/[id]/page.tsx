import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  if (id === "1") {
    return (
      <h1 className="text-3xl text-center text-[#f2f2f2] font-anton">
        Welcome user 1 , this is techtalks
      </h1>
    );
    
    } else if (id === "2") {
    return (
      <h1 className="text-3xl text-center text-[#f2f2f2] font-anton">
        Welcome user 2, this is techtalks #2
      </h1>
    );
    } else {
    return (
      <h1 className="text-3xl text-center text-[#f2f2f2] font-anton">
        Welcome user anonymous, this is a hacker
      </h1>
    );
  }
};

export default page;
