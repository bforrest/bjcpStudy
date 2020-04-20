import {
    action
} from '@storybook/addon-actions';
import StatsView from "./StatsView";

export default {
    title: "Stats View",
    component: StatsView,
    excludeStories: /.*Data$/,
}

// default task state
export const Default = () => ({
    components: {
        StatsView
    },
    template: statTemplate,
    props: {
        stats: {
            default: () => stats
        }
    },
})

export const Visible = () =>
    ({
        components: {
            StatsView
        },
        template: statTemplate,
        props: {
            stats: {
                default: () => stats
            }
        },
        methods: {
            action: action('clicked')
        },
        // mount: {
        //     StatsView.onClick(),
        // }
    })

const statTemplate = `<StatsView :stats="stats" />`;

const stats = {
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

export const statsData = stats