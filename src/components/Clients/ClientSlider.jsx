import React from "react";

const ClientSlider = (props) => {
  const { name, position, img_url, disc } = props.item;
  return (
    <div className="justify-center px-3">
      <div
        class={`${img_url} flex flex-col bg-white justify-end  bg-cover rounded-t-xl bg h-96`}
      >
        <div class="p-6 bg-black bg-opacity-70 rounded-t-3xl ">
          <div class="text-base text-lime-100  font-medium bg-opacity-100">
            {name}
          </div>
          <div class="text-2xl text-orange-200 font-bold bg-opacity-100">
            {position}
          </div>
          <p class="mb-2 text-sm text-opacity-100">{disc}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
