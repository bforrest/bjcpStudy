import {
    shallowMount,
    mount
} from "@vue/test-utils";

import Component from './StatsView.vue';
import statsData from './StatsView.stories.js';

describe('StatsView', () => {
    let vm
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Component)
            // wrapper.setProps({
            //     stats: statsData
            // })
        vm = wrapper.vm
    })

    describe('initially', () => {
        it('exists', () => {
            expect(wrapper.exists()).toBe(true)
        })
        it('hides stats', () => {
            expect(vm.hideStats).toBe(true)
        })
    })

    describe('onClick', () => {
        it('emits click', () => {
            vm.$emit = jest.fn()
            vm.onClick()
            expect(vm.$emit).toHaveBeenCalledWith('click')
        })
    })
})

describe("StatView Properties", () => {
    let vm
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Component)
        wrapper.setProps({
            stats: statsData
        })
        vm = wrapper.vm
    })
    describe('props set', () => {


        it('has props', () => {
            vm.props = statsData
            expect(wrapper.props('stats')).toBe(statsData)
        })
    })
})