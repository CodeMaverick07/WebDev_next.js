import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestion = [
    {
      _id: "1",
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: "2",
      title: "Is it only me or the font is bolder than necessary?",
    },
    {
      _id: "3",
      title: "Can I get the course for free?",
    },
    {
      _id: "4",
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: "5",
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];
  const popularTags = [
    {
      _id: "1",
      name: "React.js",
      totalQuestion: 10,
    },
    {
      _id: "2",
      name: "Node.js",
      totalQuestion: 26,
    },
    {
      _id: "3",
      name: "Express.js",
      totalQuestion: 31,
    },
    {
      _id: "4",
      name: "React.js",
      totalQuestion: 42,
    },
    {
      _id: "5",
      name: "Next.js",
      totalQuestion: 91,
    },
  ];
  return (
    <section className="background-light900_dark200 no-scrollbar light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto  border-l p-6 pt-36 shadow-light-300 dark:shadow-none  max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700 ">
                  {question.title}
                </p>
                <Image
                  src={"/assets/icons/chevron-right.svg"}
                  alt=">"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => {
            return (
              <RenderTag
                key={item._id}
                name={item.name}
                _id={item._id}
                question={item.totalQuestion}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
