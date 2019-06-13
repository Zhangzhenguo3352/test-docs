# message 全局提示组件

> 基础用法

:::demo ### 通过 `动态 ` 创建方式实现

```html
<template>
    <div>
        <button-component @click.native="infoMessage">info 普通提示</button-component>
        <button-component @click.native="successMessage">success 成功</button-component>
        <button-component @click.native="errorMessage">error 失败</button-component>
        <button-component @click.native="warningMessage">warning 警告</button-component>
    </div>
</template>
<script>
import { Message, ButtonComponent, Modal } from 'vo-ui'

export default {
    components: {
        ButtonComponent, Modal
    },
    data() {
      return {
        showModal: false,
        showModal2: false,
      }
    },
    methods: {
        infoMessage() {
            Message.info( 'This is a normal info', 1.5)
        },
        successMessage() {
            Message.success('This is a normal success', 2)
        },
        errorMessage() {
            Message.error('This is a normal error', 3)
        },
        warningMessage() {
            Message.warning('This is a normal warning', 4)
        }

    }
}
</script>

```

:::


> ## 全局提示配置

| 名称        | 说明          
| ------------- |:-------------|
| Message.info | 信息提醒反馈 |
| Message.success | 成功 |
| Message.error | 失败 |
| Message.warning | 警告 |
| message | 第一个参数，提示的信息 |
| time | 第二个参数，默认 1s |