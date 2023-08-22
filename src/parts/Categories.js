import React from "react";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section
        className="container mx-auto"
        key={`category-${index1}`}>
        <h4 className="mb-3 font-medium">
          {category.name}
        </h4>
        <div className="grid grid-cols-12 auto-rows-[minmax(185px, auto)] grid-flow-dense gap-x-[30px] gap-y-[30px] relative z-[3]">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="grid col-auto items-center">
                There is no properties at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  key={`category-${index1}-item-${index2}`}
                  className="grid col-end-[span_3] row-end-[span_1]">
                  <div className="card shadow-xl image-full cursor-pointer">
                    {item.isPopular && (
                      <div className="overflow-hidden z-10">
                        <div className="flex justify-center text-[0.875rem] bg-amber-400 text-white rounded-tr-xl rounded-bl-xl float-right p-2 w-1/2">
                          Popular&nbsp;
                          <span className="font-light">
                            {" "}
                            Choicce
                          </span>
                        </div>
                      </div>
                    )}
                    <figure>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full "
                      />
                    </figure>
                  </div>
                  <div className="card-body justify-start">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}>
                      <h5 className="">{item.name}</h5>
                    </Button>
                    <span className="text-[#B0B0B0]">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
