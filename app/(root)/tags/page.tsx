import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { HomePageFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tags.action";
import Link from "next/link";
import React from "react";

const page = async () => {
  const result = await getAllTags({});
  console.log("====================================");
  console.log(result);
  console.log("====================================");
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="search for tags"
          otherClasses="flex-1"
        />{" "}
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.length > 0 ? (
          result.map((tag) => {
            return (
              <Link
                href={`/tags/${tag._id}`}
                className="shadow-light100_darknone"
                key={tag.name}
              >
                <article className="background-light900_dark200 light-border align-center flex w-full justify-center rounded-2xl border px-8 py-10 text-center sm:w-[260px]">
                  <div>
                    <div className="background-light800_dark400 w-fit rounded-md px-5 py-1.5">
                      <p className="paragraph-semibold text-dark300_light900">
                        {tag.name}
                      </p>
                    </div>
                    <p className="small-medium text-dark400_light500 mt-3.5">
                      <span className="body-semibold primary-text-gradient mr-2.5">
                        {tag.Questions.length}+
                      </span>{" "}
                      Questions
                    </p>
                  </div>
                </article>
              </Link>
            );
          })
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>no user yet</p>
            <Link
              href="/ask-question"
              className="mt-2 font-bold text-accent-blue"
            >
              no tags be first one to create tags
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default page;
