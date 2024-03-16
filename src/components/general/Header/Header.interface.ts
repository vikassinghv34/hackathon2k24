interface HeaderLogo {
  value: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
}

interface CTA {
  value: {
    href: string;
  };
}

interface MobileLogo {
  value: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
}

export interface NavigationLink {
  url: string;
  name: string;
}
interface Fields {
  HeaderLogo: HeaderLogo;
  CTA: CTA;
  MobileLogo: MobileLogo;
  NavigationLinks: NavigationLink[];
}

export interface Root {
  fields: Fields;
}
