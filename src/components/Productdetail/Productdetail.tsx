import {
  Field,
  ImageField,
  ImageFieldValue,
  Link,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'next/image';
import React from 'react';

type ServicesProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    listingData: Service[];
  };
};

type Service = {
  fields: {
    image: ImageField;
    Title: Field<string>;
    shortDesc: Field<string>;
    cta: Field<ImageFieldValue>;
    ctaText: Field<string>;
  };
};
const Services = ({ fields }: ServicesProps) => {
  //   console.log(fields);

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto">
        <div className="w-full text-center text-black font-bold text-[32px] uppercase">
          <Text field={fields.Title}></Text>
          <span className="bg-black w-10 rounded-md mx-auto h-1.5 block my-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {fields.listingData.map((service: Service, index: number) => {
            // console.log(service);
            const serviceLogo =
              '' + service.fields.image.value?.src?.replace('/sitecore/shell/', '');
            return (
              <div key={index} className="px-4">
                <div className="py-6 px-4 mt-11 bg-black mx-auto text-center">
                  <div className="invert">
                    <Image
                      className="mx-auto"
                      src={serviceLogo}
                      alt={service.fields.image.value?.alt as string}
                      width={75}
                      height={75}
                    ></Image>
                  </div>
                  {/* <div className="mt-6"> */}
                  <div className="text-white mb-5 font-bold text-lg uppercase mt-6">
                    <Text field={service.fields.Title}></Text>
                  </div>
                  {/* </div> */}
                  <div className=" text-white mb-4">
                    <Text field={service.fields.shortDesc}></Text>
                  </div>
                  <div className="mt-2.5 inline-block">
                    <Link
                      className="bg-white py-2 px-9 text-black uppercase inline-block border-2 border-white hover:text-white transition duration-500 hover:bg-transparent"
                      field={service.fields.cta}
                    >
                      <Text field={service.fields.ctaText}></Text>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ServicesProps>(Services);
