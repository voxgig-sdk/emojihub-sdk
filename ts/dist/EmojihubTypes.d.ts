export interface All {
    category: string;
    group: string;
    htmlCode: any[];
    name: string;
    unicode: any[];
}
export interface AllListMatch {
    category?: string;
    group?: string;
    htmlCode?: any[];
    name?: string;
    unicode?: any[];
}
export interface Category {
    category: string;
    group: string;
    htmlCode: any[];
    id?: string;
    name: string;
    unicode: any[];
}
export interface CategoryLoadMatch {
    id: string;
}
export interface CategoryListMatch {
    category?: string;
    group?: string;
    htmlCode?: any[];
    id?: string;
    name?: string;
    unicode?: any[];
}
export interface Group {
    category: string;
    group: string;
    htmlCode: any[];
    id?: string;
    name: string;
    unicode: any[];
}
export interface GroupLoadMatch {
    id: string;
}
export interface GroupListMatch {
    category?: string;
    group?: string;
    htmlCode?: any[];
    id?: string;
    name?: string;
    unicode?: any[];
}
export interface Random {
    category: string;
    group: string;
    htmlCode: any[];
    name: string;
    unicode: any[];
}
export interface RandomListMatch {
    category?: string;
    group?: string;
    htmlCode?: any[];
    name?: string;
    unicode?: any[];
}
export interface Search {
    category: string;
    group: string;
    htmlCode: any[];
    name: string;
    unicode: any[];
}
export interface SearchListMatch {
    q: string;
}
export interface Similar {
    category: string;
    group: string;
    htmlCode: any[];
    id?: string;
    name: string;
    unicode: any[];
}
export interface SimilarLoadMatch {
    id: string;
}
