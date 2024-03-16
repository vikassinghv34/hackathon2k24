import {
  Text,
  RichText,
  Link,
  withDatasourceCheck,
  Field,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

// import { Footerprops } from 'src/Types/types';
type Footerprops = ComponentProps & {
  fields: {
    CopyrightText: Field<string>;

    NavigationLinks: Navs[];
    // NavigationLinks: LinkFieldValue;
  };
};
type Navs = {
  fields: {
    NavLink: Field<LinkFieldValue>;
    NavTitle: Field<string>;
  };
};

const Footer = ({ fields }: Footerprops) => {
  // console.log(fields);

  return (
    <footer className="px-4 py-8 bg-black">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center text-white">
            <RichText field={fields.CopyrightText} />
          </div>
          {/* <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
            </li>
          </ul> */}
        </div>

        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          {fields.NavigationLinks.map((nav, index) => {
            return (
              <li key={index} className="text-white">
                {/* <a rel="noopener noreferrer" href="#">
                  Instagram
                </a> */}
                <Link field={nav.fields.NavLink}>
                  <Text field={nav.fields.NavTitle} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default withDatasourceCheck()<Footerprops>(Footer);
