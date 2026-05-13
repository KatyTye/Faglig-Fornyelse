import { describe, expect, test } from "vitest"
import { mount } from "@vue/test-utils"
import App, { router } from "@/App.vue"

describe('App testområde', () => {
	test('findes der en header og en footer på hjemmesiden?', async () => {

		router.push('/')
		await router.isReady()

		const wrapper = mount(App, {
			global: {
				plugins: [router]
			}
		})

		expect(wrapper.find('header').exists()).toBe(true)
		expect(wrapper.find('footer').exists()).toBe(true)
	})
})