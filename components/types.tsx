


export type FooterType = {
    text?: string,
    socialMedia?: {
        image?: string,
        link?: string,
    }[],
    quickAccess?: {
        title: string,
        items: {
            link: string,
            title: string,
        }[],
    }[],
    license?: {
        code: string,
        title: string,
    }[],
};


export type HeaderType = {
    link: string,
    title: string,
    type: string,
};


export type CompanyType = undefined | {
    status: boolean,
    output: {
        footer: FooterType,
        header: HeaderType[],
        theme: string,
    }
};