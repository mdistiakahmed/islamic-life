import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { authorType } from "./authorType";
import { post } from "./post";
import { hajj } from "./hajjType";
import { quran } from "./quranTypes";
import { salat } from "./salatTypes";
import { sawm } from "./sawmTypes";
import { zakat } from "./zakatTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    authorType,
    post,
    hajj,
    quran,
    salat,
    sawm,
    zakat,
  ],
};
