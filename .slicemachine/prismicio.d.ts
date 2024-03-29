// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for ecommerce documents */
interface ProductsEcommerceDocumentData {
    /**
     * name field in *ecommerce*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * banner field in *ecommerce*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * image_one field in *ecommerce*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.image_one
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_one: prismicT.ImageField<never>;
    /**
     * image_two field in *ecommerce*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.image_two
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_two: prismicT.ImageField<never>;
    /**
     * image_three field in *ecommerce*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.image_three
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_three: prismicT.ImageField<never>;
    /**
     * image_for field in *ecommerce*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.image_for
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_for: prismicT.ImageField<never>;
    /**
     * description field in *ecommerce*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * price field in *ecommerce*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    price: prismicT.RichTextField;
    /**
     * category field in *ecommerce*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: products_ecommerce.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    category: prismicT.RichTextField;
    /**
     * promotion field in *ecommerce*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: products_ecommerce.promotion
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    promotion: prismicT.BooleanField;
}
/**
 * ecommerce document from Prismic
 *
 * - **API ID**: `products_ecommerce`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductsEcommerceDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProductsEcommerceDocumentData>, "products_ecommerce", Lang>;
export type AllDocumentTypes = ProductsEcommerceDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ProductsEcommerceDocumentData, ProductsEcommerceDocument, AllDocumentTypes };
    }
}
