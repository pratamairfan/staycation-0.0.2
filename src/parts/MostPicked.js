import Button from "elements/Button";
import React from "react";

export default function MostPicked(props) {
  return (
    <section className="container mx-auto px-4" ref={props.test}>
      <h4 className="mb-3 text-2xl">Most Picked</h4>
      <div className="grid grid-cols-12 auto-rows-[minmax(185px, auto)] grid-flow-dense gap-x-[30px] gap-y-[30px] relative z-[3]">
        {props.data.map((item, index) => {
          return (
            <div key={index} className={`grid col-end-[span_4] ${index === 0 ? "row-end-[span_2]" : "row-end-[span_1]"}`}>
              <div className="card shadow-xl image-full cursor-pointer">
                <div className="overflow-hidden z-10">
                  <div className="flex justify-center text-[0.875rem] bg-amber-400 text-white rounded-tr-xl rounded-bl-xl float-right p-2 w-1/2">
                    ${item.price}&nbsp;
                    <span className="font-light"> per {item.unit}</span>
                  </div>
                </div>
                <figure>
                  <img src={item.imageUrl} alt={item.name} className="w-full " />
                </figure>
                <div className="card-body justify-end">
                  <Button className="text-white" type="link" href={`/properties/${item._id}`}>
                    {item.name}
                  </Button>
                  <span className="text-white">
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
