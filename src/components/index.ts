import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

const components = [SvgIcon]

export function setupGlobalComponents(app: App) {
	components.forEach(component => app.component(component.name, component))
}
