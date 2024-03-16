interface Datasource {
  datasource: {
    title: {
      jsonValue: {
        value: string;
      };
    };
    listingData: {
      jsonValue: ListingData[];
    };
    image: {
      jsonValue: {
        value: ImageValue;
      };
    };
  };
}

interface ListingData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    [key: string]: {
      value: string | null | EmbeddedVideo | ImageValue;
    };
  };
}

interface EmbeddedVideo {
  value: string;
}

interface ImageValue {
  src: string;
  alt: string;
  width: string;
  height: string;
}

interface Data {
  data: Datasource;
}
interface Fields {
  fields: Data;
}

export interface Renderings {
  rendering: Fields;
}

export interface Root {
  jsonValue: ListingData[];
}

export interface RootListingData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: {
      value: string;
    };
    youtubeEmbeddedLink: {
      value: string;
    };
    Content: {
      value: string;
    };
    titleText: {
      value: string;
    };
    thumbnailImage: {
      value: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
    };
    NavigationTitle: {
      value: string;
    };
    desc: {
      value: string;
    };
  };
}