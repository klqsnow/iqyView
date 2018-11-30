<template>
    <div :style="styles" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Row",
        props: {
            gutter: {
                type: Number,
                default: 0
            },
            type: String,
            justify: {
                type: String,
                default: 'start',
                validator: function (value) {
                    return  ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value)>-1;
                }
            },
            align: {
                type: String,
                default: 'top'
            }
        },
        methods: {},
        computed: {
            classes: function () {
                let classList = [];
                if(this.type === 'flex'){
                    classList.push('iqy-row-flex')
                    classList.push(`iqy-row-flex-justify-${this.justify}`)
                    classList.push(`iqy-row-flex-align-${this.align}`)
                }else{
                    classList.push('iqy-row')
                }
                return classList
            },
            styles: function () {
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style>
    .myslq {
        background-color: antiquewhite;
    }

    .iqy-row {
        position: relative;
        display: block;
        zoom: 1;
    }

    .iqy-row:after {
        content: '';
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
        clear: both;
    }

    .iqy-row-flex {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
    }

    .iqy-row-flex-justify-start {
        justify-content: flex-start;
    }

    .iqy-row-flex-justify-end {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .iqy-row-flex-justify-center {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .iqy-row-flex-justify-space-around {
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .iqy-row-flex-justify-space-between {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .iqy-row-flex-align-top {
        -webkit-box-pack:start;
        -ms-flex-pack:start;
        align-items: flex-start;
    }

    .iqy-row-flex-align-middle {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .iqy-row-flex-align-bottom {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
    }


</style>
