import {
  Field,
  ImageFieldValue,
  Link,
  LinkFieldValue,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

// import { BannerProps } from 'src/Types/types';

import Image from 'next/image';
import { ComponentProps } from 'lib/component-props';

type BannerProps = ComponentProps & {
  fields: {
    bannerImage: Field<ImageFieldValue>;
    bannerTitle: Field<string>;
    bannerDescription: Field<string>;
    primarybannerCTAtitle: Field<string>;
    secondarybannerCTAtitle: Field<string>;
    primarybannerCTAlink: Field<LinkFieldValue>;
    secondarybannerCTAlink: Field<LinkFieldValue>;
  };
};

const Banner = ({ fields }: BannerProps) => {
  const bgImage = '' + fields.bannerImage.value.src;
  return (
    <div
      className="relative text-center h-screen w-full overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Image
        className="bg-cover bg-no-repeat min-w-fit min-h-screen"
        src={bgImage}
        alt={fields.bannerImage.value.alt as string}
        height={1000}
        width={2000}
      ></Image>
      <div className="absolute bg-fixed bg-black/[0.5] overflow-hidden bottom-0 left-0 right-0 top-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center md:justify-start px-4  ">
          <div className="container mx-auto">
            <div className="text-white md:text-left flex flex-col gap-7 md:max-w-screen-sm">
              <div className=" text-4xl md:text-5xl font-bold uppercase">
                <RichText field={fields.bannerTitle}></RichText>
              </div>
              <div className="text-white">
                <RichText field={fields.bannerDescription}></RichText>
              </div>
              <div className="flex justify-center flex-col sm:flex-row text-center md:justify-start items-center gap-3">
                <Link
                  className="bg-white text-black w-44 py-3 border-2 border-black hover:border-white  hover:bg-transparent hover:text-white transition duration-500"
                  field={fields.primarybannerCTAlink}
                >
                  <Text field={fields.primarybannerCTAtitle}></Text>
                </Link>
                <Link
                  className="bg-black text-white w-44 py-3 hover:bg-transparent transition duration-500 border-2 hover:text-white
                   border-white hover:border-white"
                  field={fields.secondarybannerCTAlink}
                >
                  <Text field={fields.secondarybannerCTAtitle}></Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<BannerProps>(Banner);
