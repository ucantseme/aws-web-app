import { shallowMount } from '@vue/test-utils'
import AddCount from '@/components/AddCount.vue'

describe('AddCount.vue', () => {
  it('add count', async() => {
    const wrapper = shallowMount(AddCount)
    const btn = wrapper.find('button')
    const num = wrapper.find('p')
    expect(num.text()).toContain('0')
    await btn.trigger('click')
    expect(num.text()).toContain('1')
  })
})
