import React from 'react';
import { HtmlContent } from './../helpers/RichtextA11yWrapper/RichTextA11yWrapper';
import { Renderings, RootListingData } from './CategoryListingPage.interface';
export default function CategoryListingPage(props: Renderings) {
  const data = props?.rendering?.fields?.data?.datasource?.listingData?.jsonValue;
  console.log('Data==>', props);
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Explore Various Courses</h2>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((data: RootListingData) => {
            return (
              <>
                <article className="flex flex-col dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href={data.url}
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt="image"
                      className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
                      src={data?.fields?.thumbnailImage?.value?.src}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <p className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
                      {data?.name}
                    </p>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      <HtmlContent content={data?.fields?.desc?.value} />
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>June , 2020</span>
                      <span>2.1K views</span>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
