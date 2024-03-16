import React from 'react';
import { JSONData } from './LearningDetailsPage.interface';
import { HtmlContent } from './../helpers/RichtextA11yWrapper/RichTextA11yWrapper';

export default function LearningDetailsPage(props: JSONData) {
  const data = props?.fields?.data?.datasource;
  console.log(data?.desc?.jsonValue?.value);
  return (
    <div className=" flex flex-col justify-center items-center gap-5">
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full p-8">
          <h1 className="text-3xl font-bold text-center mb-6">{data?.title?.jsonValue?.value}</h1>
          <div className="w-full mx-auto py-6 h-[380px]">
            <iframe
              className="w-full h-full"
              src={data?.youtubeEmbeddedLink?.jsonValue?.value}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="max-w-none">
            <HtmlContent content={data?.desc?.jsonValue?.value} />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <p className="text-2xl font-bold">Review Section Coming Soon</p>
      </div>
    </div>
  );
}
