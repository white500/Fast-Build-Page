<!-- 
edition: v1.0.1.alpha
time: 2020年9月9日22:17:27
author: maggot_code
-->
<script>
import _schema from './index.json'
import * as house from '@/utils/house'
import houseMixins from '@/mixins/house.mixins'
export default {
	name: _schema.name,
	mixins: [houseMixins],
	components: {},
	render(createElement) {
		return createElement(...this.setElement())
	},
	data () {
		// 这里存放数据
		return {
			h_schema: _schema,
			h_props: _schema.properties.props,
			h_action: _schema.properties.action
		}
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {
		h_props: {
			handler(newVal) {
				console.log(newVal);
			},
			deep: true
		}
	},
	// 方法集合
	methods: {
		setElement() {
			return [
				'a-button',
				{ 
					...this.filterProps(this.h_props)
				},
				this.h_props.text.params
			]
		},
		filterProps(schema) {
			const params = {}
			for (const key in schema) {
				if (schema.hasOwnProperty(key)) {
					const sc = schema[key];
					if (sc.params !== 'default' && this.langInterFace(sc.type)(sc.params)) {
						params[key] = sc.params
					}
				}
			}
			return { props: params };
		}
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created () {},
	// 生命周期 - 挂载完成（可以访问DOM元素）
	mounted () {},
	beforeCreate () {}, // 生命周期 - 创建之前
	beforeMount () {}, // 生命周期 - 挂载之前
	beforeUpdate () {}, // 生命周期 - 更新之前
	updated () {}, // 生命周期 - 更新之后
	beforeDestroy () {}, // 生命周期 - 销毁之前
	destroyed () {}, // 生命周期 - 销毁完成
	activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
@import './index.scss';
</style>
