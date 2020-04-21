import SubCategoryView from "./SubCategoryView";
import StatsView from "./StatsView";

export default {
    title: "Sub-category View",
    component: SubCategoryView,
    excludeStories: /.*Data$/,
}

export const Default = () => ({
    components: {
        SubCategoryView
    },
    template: startTemplate,
    props: {
        subcategory: {
            default: () => subcategory
        },
    }
})

const startTemplate = `<SubCategoryView :subcategory="subcategory" />`;

const subcategory = {
    id: "1A",
    name: "American Light Lager",
    aroma: "Low to no malt aroma, although it can be perceived as grainy, sweet, or corn-like if present. Hop aroma is light to none, with a spicy or floral hop character if present. While a clean fermentation character is desirable, a light amount of yeast character (particularly a light apple fruitiness) is not a fault. Light DMS is not a fault.",
    appearance: "Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.",
    flavor: "Relatively neutral palate with a crisp and dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Hop flavor ranges from none to low levels, and can have a floral, spicy, or herbal quality (although rarely strong enough to detect). Low to very low hop bitterness. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. High levels of carbonation may accentuate the crispness of the dry finish. Clean lager fermentation character.",
    mouthfeel: "Very light (sometimes watery) body. Very highly carbonated with slight carbonic bite on the tongue.",
    impression: "Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.",
    comments: "Designed to appeal to as broad a range of the general public as possible. Strong flavors are a fault.",
    ingredients: "Two- or six-row barley with high percentage (up to 40%) of rice or corn as adjuncts. Additional enzymes can further lighten the body and lower carbohydrates.",
    comparison: "A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a Leichtbier.",
    examples: "Bud Light, Coors Light, Keystone Light, Michelob Light, Miller Lite, Old Milwaukee Light",
    tags: "session-strength, pale-color, bottom-fermented, lagered, north-america, traditional-style, pale-lager-family, balanced",
    stats: {
        ibu: {
            low: "8",
            high: "12"
        },
        og: {
            low: "1.028",
            high: "1.04"
        },
        fg: {
            low: "0.998",
            high: "1.008"
        },
        srm: {
            low: "2",
            high: "3"
        },
        abv: {
            low: "2.8",
            high: "4.2"
        }
    }
}

export const subcategoryData = subcategory