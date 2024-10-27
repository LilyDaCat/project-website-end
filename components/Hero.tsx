// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            SINGITRONIC
          </h1>
          <p className="text-white max-sm:text-sm">
          Chào mừng bạn đến với &quot;SINGITRONIC&quot; - nơi hội tụ những sản phẩm tiên tiến nhất, được thiết kế để đáp ứng nhu cầu ngày càng cao của người tiêu dùng hiện đại. Với giao diện thân thiện và dễ sử dụng, trang web của chúng tôi cung cấp một trải nghiệm mua sắm trực tuyến tuyệt vời, từ những sản phẩm điện tử cao cấp đến các mặt hàng thời trang đẳng cấp. Đội ngũ của chúng tôi luôn cập nhật những xu hướng mới nhất và cam kết mang đến cho bạn những sản phẩm chất lượng nhất, giúp cuộc sống của bạn trở nên dễ dàng và tiện nghi hơn. Khám phá ngay hôm nay và trải nghiệm sự khác biệt với &quot;SINGITRONIC&quot;!
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
            ĐẶT HÀNG NGAY BÂY GIỜ
            </button>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
        <Image
          src="/watch for banner.png"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
