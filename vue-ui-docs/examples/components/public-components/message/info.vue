<template>
        <transition name="vux-dialog">
            <div v-if="show" class="main">
                <div v-if="messageType === 'info'">
                    <div class="info_style box">
                        <icon-component type="gantanhao"></icon-component>
                        <span class="message">{{messageData}}</span>
                    </div>
                </div>
                <div v-if="messageType === 'error'">
                    <div class="error_style box">
                        <icon-component type="Group-"></icon-component>
                        <span class="message">{{messageData}}</span>
                    </div>
                </div>
                <div v-if="messageType === 'success'">
                    <div class="success_style box">
                        <icon-component type="chenggong"></icon-component>
                        <span class="message">{{messageData}}</span>
                    </div>
                </div>
                <div v-if="messageType === 'warning'">
                    <div class="warning_style box">
                        <icon-component type="gantanhao"></icon-component>
                        <span class="message">{{messageData}}</span>
                    </div>
                </div>
            </div>
        </transition>
</template>

<script>

import IconComponent from '../../pc-and-docs/icon'
export default {
    name: 'Message',
    components:{
        IconComponent
    },
    data() {
        return {
            messageType: false,
            messageData: '',
            show: false,
            timer: null,
            content: 1000
        }
    },
    mounted() {
        this.messageType = this.type;
        this.messageData = this.message
        this.show = true
        let contentTime = !Number(this.content) ? 1000 : Number(this.content) * 1000
        this.timer = setInterval(() => {
            this.show = false
            
        }, contentTime)
    },
    destroyed() {
        clearTimeout(this.timer)
    },
}
</script>

<style lang="scss" scoped>
@import '../../public-style/transition-translate.scss';

.main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    padding: 5px 10px ;
    background: #fff;
    box-shadow: 
                1px 0px 14px rgba(0, 0, 0,0.1),
                -1px 0px 14px rgba(0, 0, 0,0.1),
                0 4px 12px rgba(0,0,0,0.15);
    margin-top: 20px;
    border-radius: 4px;
    display: inline-block;
    span.icon{
        font-size: 17px;
    }
    .message{
        margin-left: 5px;
        position: relative;
        top:-2px;
    }
}
.info_style{
    span.icon{
        color: rgb(7, 125, 243)
    }
}
.error_style{
    span.icon{
        color: red
    }
}
.success_style{
    span.icon{
        color: rgb(58, 255, 51);
    }
}
.warning_style{
    span.icon{
        color: #dce01a
    }
}

</style>