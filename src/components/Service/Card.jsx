import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { img, disc, title, navigation, tags } = props;

  return (
    <div className="flex items-center w-full justify-center bg-opacity-50 hover:translate hover:scale-[110%] hover:cursor-pointer border border-stone-700">
      <a href={navigation}>
        <div className="max-w-xs">
          <div className="photo-wrapper p-2 ">
            <img
              class="w-56 h-56 rounded-full mx-auto border border-stone-700"
              src={img}
              alt="img"
            />
          </div>
          <div className="shadow-xl rounded-lg py-3">
            <div className="p-2">
              <h3 className="text-center text-xl green font-medium leading-8">
                {title}
              </h3>
              <div className="text-center text-gray-400 text-sm font-semibold">
                <p>{disc}</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-2">
                {tags?.length > 0
                  ? tags?.map((tag, idx) => (
                      <span
                        className={`bg-[#d37c0a] text-white text-xs font-medium px-2 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
