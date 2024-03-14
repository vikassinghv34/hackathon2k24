/**
 * This file is actually not auto-generated, but is used to override Sitecore base interfaces
 */

import {
  ComponentFactory,
  ComponentFields,
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Item,
} from '@sitecore-jss/sitecore-jss-nextjs';

export namespace Sitecore.Override {
  export type ItemEx = Item & {
    id?: string;
    url?: string;
    templateId?: string;
    name?: string;
    displayName?: string;
    fields: {
      [name: string]: Field | ItemEx | ItemEx[] | undefined;
    };
  };

  // Replaces  ComponentRendering & DefaultComponentProps
  export type ComponentBase = {
    componentName?: string;
    dataSource?: string;
    uid?: string;
    fields?: ComponentFields;

    componentFactory?: ComponentFactory;
    rendering?: ComponentRendering;
    params?: ComponentParams;
  };

  // Replaces  ComponentRendering & DefaultComponentProps
  export type PageBase = {
    fields?: {
      // This exists here because we needed to have separate fields in Sitecore for different page types
      // So from the point of our JSS app they should be treated as the same field, but they have different
      // validation rules in Sitecore and thus need to be separate
      pageFeaturedImage: ImageField;
    };
  };
}